import { StatusBar } from 'expo-status-bar'
import React from 'react'
import MainMenu from './MainMenu'
import { StyleSheet, Text, View, Button, Image, TextInput, SafeAreaView, Alert} from 'react-native'
import { ThemeProvider, useTheme } from '../../contexts/ThemeContext'

export default function Startup() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [signUp, setSignUp] = React.useState(false)
    const [login, setLogin] = React.useState(false)
    const [nextButton, setNextButton] = React.useState(false)
    const [showLanding, setShowLanding] = React.useState(true)
    const [lettersCompleted, setLettersCompleted] = React.useState([])
    
    const dark = useTheme()
    const currentStyle = dark ? darkMode : lightMode
  
    const handleSignUp = () => {
      console.log('Sign up')
      setSignUp(true)
    }

    const createUser = () => {
      console.log("creating user")
        const mediaFile = {
          username: username,
          password: password
        }
        sendUserData(mediaFile, 'add_user')
    }

    const sendUserData = async (mediaFile, extension) => {
      let url = 'http://192.168.1.150:5000/' + extension

      const data = {
        username: mediaFile.username,
        password: mediaFile.password
      }

      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      checkResponse(response, extension)
    }

    const checkResponse = async (response, extension) => {
      const result = await response.json()
      console.log("response is " + result)
      if(extension === 'add_user'){
        checkSignup(result)
      }else{
        checkLogin(result)
      }
    }

    const checkSignup = (result) => {
      if(result == "Username already exists"){
        Alert.alert('Please Try Again', 'Sorry, but it looks like that username is already taken. Please try again.',[
          {
            text: 'Retry',
            onPress: () => {}
          },
        ])
          return;
        }
        console.log('success')
        setShowLanding(false)
    } 
    const checkLogin = (result) => {
      if(result == "Error: wrong username or password"){
        Alert.alert('Please Try Again', 'Sorry, but that username or password does not look right. Please try again.',[
          {
            text: 'Retry',
            onPress: () => {}
          },
      ])
        return;
      }
      list = []
      for(let i = 0; i < result.length; i++){
        if(result[i] != ','){
          list.push(result[i])
        }
      }
      setLettersCompleted(list)
      setShowLanding(false)
    }

    const loginUser = () => {
      console.log("logging user")
      const mediaFile = {
        username: username,
        password: password
      }
      sendUserData(mediaFile, 'login_user')
    }
  
    const handleNext = () => {
      setShowLanding(false)
    }

    const handleBack = () => {
      setSignUp(false)
      setLogin(false)
    }
  
    const userInfo = () => {
      if(!signUp && !login){
        return
      }
      return (
          <View>
            <TextInput
              style={currentStyle.input}
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              secureTextEntry={true}
              style={currentStyle.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            /> 

            <View>
              <Button title="Submit" onPress={signUp ? createUser : loginUser}/>
            </View>
          </View>
      )
    }
  
    const optionsJSX = () => {
      if(!signUp && !login)
        return(
          <View style={currentStyle.footer}>
            <Button title="Sign Up" onPress={handleSignUp} />
            <Button title="Log In" onPress={() => setLogin(true)} />
          </View>
        )
    }
  
    if(showLanding){
      return (
        <ThemeProvider>
        <View style={currentStyle.background}>
        <View style={currentStyle.back}>
              {
                (signUp || login) 
                ?
                <Button title='Back' onPress={handleBack}/>
                : 
                null
              }
          </View>
          <SafeAreaView style={currentStyle.container}>
            <View style={currentStyle.header}>
              <Text style={currentStyle.title}>SignLearner</Text>
              <Image source={require('../../assets/SignLearner_no_background.png')} style={currentStyle.image} />
            </View>
          { userInfo() } 
          { optionsJSX() }
            { nextButton ? (
              <View>
                <Button
                  title="Next"
                  style={currentStyle.nextButton}
                  onPress={handleNext}
                />
              </View>
            ) : null }
            <Text style={currentStyle.credit}>Created by Dax McPartland</Text>
            <StatusBar style="auto" />
          </SafeAreaView>
        </View>
        </ThemeProvider>
      )
    }  
      return(
        <ThemeProvider>
          <MainMenu username={username} lettersCompleted={lettersCompleted}/>
        </ThemeProvider>
      )
  }
  const lightMode = StyleSheet.create({
    background: {
      width: "100%",
      height: "100%",
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignSelf: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    header: {
      alignItems: 'center',
      marginTop: 20,
    },
    footer: {
      marginBottom: 20,
    },
    image: {
      width: 200, 
      height: 200, 
    },
    styleButton: {
      borderColor: 'gray',
      borderWidth: 1,
    },
    credit: {
      fontSize: 8,
      color: 'gray',
      textAlign: 'center'
    },
    back: {
      justifyContent: 'flex-start',
      flexDirection: 'row',
      paddingTop: 30,
      paddingLeft: 20
    }
  })
  
  const darkMode = StyleSheet.create({
    background: {
      width: "100%",
      height: "100%",
      backgroundColor: 'rgb(50, 50, 50)'
    },
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignSelf: 'center',
      backgroundColor: 'rgb(50, 50, 50)'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white'
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      color: 'gray'
    },
    header: {
      alignItems: 'center',
      marginTop: 20,
    },
    footer: {
      marginBottom: 20,
    },
    image: {
      width: 200, 
      height: 200, 
    },
    styleButton: {
      borderColor: 'gray',
      borderWidth: 1,
    },
    credit: {
      fontSize: 8,
      color: 'gray',
      textAlign: 'center'
    },
    back: {
      position: 'absolute',
      top: 10,
      right: 10,
    }
  })