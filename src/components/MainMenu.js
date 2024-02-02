/*
 * MainMenu.js
 * The main menu for the app. This will show all the lessons for hand signs
 * and if the user has completed them.
 * 
 * Author: Dax McPartland
 * Date: February 1, 2024
*/
import React from 'react'
import LetterLesson from './LetterLesson'
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native'
import PropTypes from 'prop-types'
import { useTheme } from '../../contexts/ThemeContext'

export default function MainMenu(props) {
    MainMenu.propTypes = {
      username: PropTypes.string,
      lettersCompleted: PropTypes.array
    }
    const [letterClicked, setLetterClicked] = React.useState('')
    const [completedLetters, setCompletedLetters] = React.useState({})
    const [showLesson, setShowLesson] = React.useState(false)

    const darkMode = useTheme()
    const currentStyle = darkMode ? darkTheme : lightTheme

    const alphabet = Array.from(Array(26), (_, index) => String.fromCharCode(65 + index).toString())

    React.useEffect(() => {
      console.log(props.lettersCompleted)
      props.lettersCompleted.forEach(updateCompletedLetters)
    }, [])
    
    const handleButtonPress = (letter) => {
        console.log('Button pressed:', letter)
        setLetterClicked(letter)
        setShowLesson(true)
    }

    const LetterStatus = ({ completed }) => {
        return (
          <View style={currentStyle.letterStatus}>
            {completed ? <Image source={require('./images/green_checkmark.png')}  style={{ width: 20, height: 20 }} /> : null}
          </View>
        )
    }

    const updateCompletedLetters = (letter) => {
      setCompletedLetters((prevCompletedLetters) => ({
        ...prevCompletedLetters,
        [letter]: true,
      }))
    }

    const updateLetterStatus = (letter) => {
        updateCompletedLetters(letter)
        updateStatus(letter)
    }

    const updateStatus = async (letter) => {
      const mediaFile = {
        username: props.username,
        letter: letter,
      }
      let url = 'http://192.168.1.150:5000/updateStatus'

      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mediaFile),
      })
      checkResponse(response)
    }

    const checkResponse = async (response) => {
      const result = await response.json()
      if(result === 'ERROR'){
        Alert.alert('Error', 'Sorry, but it looks like something went wrong trying to process that operation. Please try again.',[
          {
            text: 'Retry',
            onPress: () => {}
          },
        ])
          return;
        }
      }

    if(showLesson){
        return (
            <LetterLesson letterClicked={letterClicked} setShowLesson={setShowLesson} updateLetterStatus={updateLetterStatus}/>
        )
    }
  
    return (
      <View style={currentStyle.screen}>
       <Text style={currentStyle.title}>Click a letter to learn it</Text>
        <View style={currentStyle.container}>
            <View style={currentStyle.buttonRow}>
              {alphabet.map((letter, index) => (
                 <View key={index} style={currentStyle.buttonContainer}>
                 <Button title={letter} onPress={() => handleButtonPress(letter)} />
                 <LetterStatus completed={completedLetters[letter]} />
               </View>
              ))}
            </View>
        </View>
        </View>
    )
}

const lightTheme = StyleSheet.create({
      screen: {
        width: '100%',
        height: '100%',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title:{
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: 45,
        fontWeight: 'bold' 
      },
      buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      },
      letterStatus: {
        height: 20, 
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonContainer: {
        alignItems: 'center',
        margin: 5,
      },
  })

const darkTheme = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(40, 40, 40)'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(40, 40, 40)'
  },
  title:{
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginTop: 45,
    backgroundColor: 'rgb(40, 40, 40)',
    fontWeight: 'bold' 
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  letterStatus: {
    height: 20, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 5,
  },
})
