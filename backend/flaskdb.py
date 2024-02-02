from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import torch
from PIL import Image
from io import BytesIO
from torchvision.transforms import functional
from models.common import DetectMultiBackend
import cv2
import numpy as np

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/signlearner'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class LetterCompletion(db.Model):
    username = db.Column(db.String(20), primary_key=True)
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for letter in alphabet:
            column_name = f"letter_{letter}"
            locals()[column_name] = db.Column(db.Boolean, default=False)
    # ... Add columns for the remaining letters (letter_c to letter_z)

    def __init__(self, username):
        self.username = username

class Users(db.Model):
   username = db.Column(db.String(20), primary_key = True)
   password = db.Column(db.String(20))

   def __init__(self, username, password):
      self.username = username
      self.password = password

class UsersSchema(ma.Schema):
    class Test:
       fields = ('username', 'password')

user_schema = UsersSchema()

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model = torch.hub.load('ultralytics/yolov5', 'custom', path='./runs/train/exp2/weights/best.pt')

classes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
itemsFound = []

def is_username_unique(username):
    existing_user = Users.query.filter_by(username=username).first()
    return existing_user is None


@app.route('/get', methods = ['GET'])
def getLastScore():
    return jsonify({'list' : itemsFound})

@app.route('/add_user', methods=['POST'])
def add_user():
    print('Recieved user request')
    username = request.json['username']
    password = request.json['password']

    if not is_username_unique(username):
        return jsonify("Username already exists")
    print('is unique')
    user = Users(username, password)
    db.session.add(user)

    # add letters
    letter_completion = LetterCompletion(username)
    db.session.add(letter_completion)

    db.session.commit()
    return jsonify("Successfully created user")

@app.route('/login_user', methods=['POST'])
def login_user():
    print('Recieved user request')
    username = request.json['username']
    password = request.json['password']
    existing_user = Users.query.filter_by(username=username).first()
    if existing_user is None:
         return jsonify("Error: wrong username or password")
    print('Valid username') 
    if existing_user.password != password:
        return jsonify("Error: wrong username or password")

    userStatus = LetterCompletion.query.filter_by(username=username).first()
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    completedLetters = []
    for letter in alphabet:
        key = 'letter_' + letter
        if getattr(userStatus, key) is True:
            completedLetters.append(letter)
    return jsonify(completedLetters)

@app.route('/updateStatus', methods = ['POST'])
def updateStatus():
    username = request.json['username']
    letter = request.json['letter']

    letter_completion = LetterCompletion.query.filter_by(username=username).first()

    setattr(letter_completion, f"letter_{letter}", True)
    db.session.commit()
    return jsonify("Updated")

@app.route('/post', methods = ['POST'])
def uploadImage():
    try:
       print("Received POST request")
       data = request.get_data()
       start_index = data.find(b'\r\n\r\n') + len(b'\r\n\r\n')
       binary_data = data[start_index:].split(b'\r\n\r\n', 1)[1]
   
       letter = request.form.get('letter')
       print(letter)
       if letter == 'Z':
           return jsonify(True)

       pyImg = Image.open(BytesIO(binary_data)).convert('RGB')
      
       open_cv_image = np.array(pyImg)
       open_cv_image = open_cv_image[:, :, ::-1].copy()
       open_cv_image = cv2.rotate(open_cv_image, cv2.ROTATE_90_CLOCKWISE)
       open_cv_image = cv2.resize(open_cv_image, (640, 640))
       image = np.array(open_cv_image)

       results = model(image)

       pred = results.pandas().xyxy[0]
       for index, row in pred.iterrows():
        print('Found: ', classes[row['class']])
        if classes[row['class']] == letter :
           itemsFound.append(True)
           return jsonify(True)
       itemsFound.append(False)
       return jsonify(False)
    
    except Exception as e:
        print("exception")
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0")
