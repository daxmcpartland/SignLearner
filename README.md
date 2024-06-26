<html lang="en">
  <head>
    <link rel="stylesheet" href="./readme.css">
  </head>
  <body>
    <div class="container">
      <header>
          <h1>SignLearner</h1>
      </header>
      <main>
        <section>
            <column class="col-1">
                <image src="./images/signlearner_phone.png" alt="Phone with SignLearner" width="250" height="500"/>
            </column>
            <column class="col-2">
                <ul>
                    <li>Mobile application for ios and Andriod</li>
                    <li>The app assists users in learning the alphabet in sign language using AI image recognition</li>
                </ul>
            </column>
        </section>
        <h2>Training</h2>
        <image src="./images/signlearner-results.png" alt="Results from training" width="800" height="400"/>
        <section>
            <column class="col-1">
                <ul>
                    <li>Trained the AI model on <a href="https://public.roboflow.com/object-detection/american-sign-language-letters">American Sign Language Letters Dataset</a> by David Lee</li>
                    <li>Using YOLOv5 for fast single shot detection</li>
                </ul>
            </column>
            <column class="col-2">
                <image src="./images/signlearner-test.jpg" width="375" height="375"/>
            </column>
        </section>
        <h2>Development</h2>
        <section>
            <column class="col-1">
                <image src="./images/signlearner-code.png" width="575" height="300"/>
            </column>
            <column class="col-2">
                <ul>
                    <li>App built using React Native</li>
                    <li>Developed on Expo for both ios and andriod</li>
                </ul>
            </column>
        </section>
        <h2>Backend</h2>
        <section>
            <column class="col-1">
              <ul>
                <li>Stored user accounts and progress using MySQL</li>
              </ul>
            </column>
            <column class="col-2">
              <image src="./images/signlearner-db.png" width="600" height="300"/>
            </column>
        </section>
        <h2>How it works</h2>
        <section class="example">
            <column class="col-1">
              <ul>
                <li>1. Read up on how to correctly do a letter</li>
              </ul>
            </column>
            <column class="col-2">
              <image src="./images/signlearner-lesson.png" width="250" height="500"/>
            </column>
             <column class="col-1">
              <ul>
                <li>2. Take an image to test your knowledge on the hand sign</li>
              </ul>
            </column>
            <column class="col-2">
              <image src="./images/signlearner-camera.png" width="250" height="500"/>
            </column>
             <column class="col-1">
              <ul>
                <li>3. The AI model will tell you if you are doing it right or not</li>
              </ul>
            </column>
            <column class="col-2">
              <image src="./images/signlearner-check.png" width="250" height="500"/>
            </column>
        </section>
    </main>
    </div>
  </body>
</html>

