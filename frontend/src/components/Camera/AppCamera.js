/*
 * AppCamera.js
 * This is the camera and allows the users to take images of their 
 * hand signs.
 * 
 * Author: Dax McPartland
 * Date: July 29, 2023
*/
import { Camera } from 'expo-camera'
import React from 'react'
import { StyleSheet, Text, View, Alert, Image} from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import CameraButton from './CameraButtons'
import * as FS from 'expo-file-system'

export default function AppCamera(props) {
    const [cameraPermission, setCameraPermission] = React.useState(null)
    const [success, setSuccess] = React.useState(false)
    const [image, setImage] = React.useState(null)
    const [type, setType] = React.useState(Camera.Constants.Type.back)
    const [flash, setFlash] = React.useState(Camera.Constants.FlashMode.off)
    const [imageData, setImageData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const cameraRef = React.useRef(null) 

    React.useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync()
            const cameraStatus = await Camera.requestCameraPermissionsAsync()
            setCameraPermission(cameraStatus.status === 'granted')
        })()
    })
    
    const takePicture = async () => {
      setSuccess(false)
        if(cameraRef){
            try{
                const options = { quality: 0.5, base64: true, doNotSave: true }
                const data = await cameraRef.current.takePictureAsync(options)
                setImage(data.uri)
                setImageData(data)
            }catch(e){
                console.log(e)
            }
        }
    }
    

    const uploadImage = async () => {
      setLoading(true)
      try {
        await toServer({type: image, base64: imageData, uri: image, letter: props.letterClicked})
      } catch (error) {
        console.error("Error when uploading", error)
      }
    }
    
    const toServer = async (mediaFile) => {
      let content_type = ""
      let url = 'http://192.168.1.150:5000/post'

      let response = await FS.uploadAsync(url, mediaFile.uri, {
        headers: {
          "content-type": content_type,
        },
        httpMethod: "POST",
        parameters: {letter: mediaFile.letter},
        uploadType: FS.FileSystemUploadType.MULTIPART
      })
      checkResponse(response)
    }

    const retry = () => {
      setImage(null)
      setLoading(false)
    }

    const checkResponse = (response) => {
      let result
      try {
        result = JSON.parse(response.body)
      } catch (error) {
        // Handle the error if the response.body is not a valid JSON string
        console.error('Error parsing JSON:', error)
      }
  
      if(result){
        letterCompleted()
        return true
      }

      Alert.alert('That doesn\'t look right', 'The AI does not think that is the correct letter.',[
        {
          text: 'Retry',
          onPress: () => { retry() }
        },
        {
          text: 'Leave',
          onPress: () => { props.setShowCamera(false) }
        }
      ])
    }

    const letterCompleted = () => {
      setImage(null)
      setSuccess(true)
      setLoading(false)
      props.updateLetterStatus(props.letterClicked)
    }

    if(cameraPermission === false){
        return(
            <Text>Not able to access Camera</Text>
        )
    }
      
    return (
            <View style={styles.cameraArea}>
              <View style={styles.back}>
               <CameraButton title="Back" icon="back" onPress={() =>  props.setShowCamera(false)} />
              </View>
              {success ?
              <Text style={styles.success}>Congrats that looks right!</Text>
              : null}
              {!image ? 
                <Camera
                  style={styles.camera}
                  type={type}
                  flashMode={flash}
                  ref={cameraRef}
                /> : 
                <Image source={{uri: image}} style={styles.camera}/>
              }
              {
              loading ?
              <View>
                <Text style={styles.loading}>Loading....</Text>
              </View>
              :
              <View>
                {image ? 
                  <View style={styles.cameraButtons}>
                    <CameraButton title="Retake" icon='retweet' onPress={() => setImage(null)}/>
                    <CameraButton title="Use" icon='publish' onPress={() => uploadImage()} />
                  </View>
                :
                  <CameraButton title="Take Picture" icon="camera" onPress={takePicture} />
              }
              </View>
            } 
            </View>
      )
}

const styles = StyleSheet.create({
      cameraArea: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
        paddingBottom: 10,
      },
      camera: {
        flex: 1,
      },
      cameraButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50
      },
      back: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 35
      },
      loading: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      },
      success: {
        color: 'white',
        fontSize: 20,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        textAlign: 'center'
      }
  })
