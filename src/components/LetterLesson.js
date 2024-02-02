/*
 * LetterLesson.js
 * This page shows information about the current hand sign and
 * instructs the user how to complete the sign.
 * 
 * Author: Dax McPartland
 * Date: February 1, 2024
*/
import React from 'react'
import AppCamera from './Camera/AppCamera'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import { getLessonInfo } from './lessonInfo'
import { useTheme } from '../../contexts/ThemeContext'

export default function LetterLesson (props) {
    const [showCamera, setShowCamera] = React.useState(false)
    const dark = useTheme()
    const currentStyle = dark ? darkMode : lightMode

    if(showCamera){
        return (
            <AppCamera letterClicked={props.letterClicked} setShowCamera={setShowCamera} updateLetterStatus={props.updateLetterStatus}/>
        )
    }

    const imagePaths = {
      a: require('./images/a.jpg'),
      b: require('./images/b.jpg'),
      c: require('./images/c.jpg'),
      d: require('./images/d.jpg'),
      e: require('./images/e.jpg'),
      f: require('./images/f.jpg'),
      g: require('./images/g.jpg'),
      h: require('./images/h.jpg'),
      i: require('./images/i.jpg'),
      j: require('./images/j.jpg'),
      k: require('./images/k.jpg'),
      l: require('./images/l.jpg'),
      m: require('./images/m.jpg'),
      n: require('./images/n.jpg'),
      o: require('./images/o.jpg'),
      p: require('./images/p.jpg'),
      q: require('./images/q.jpg'),
      r: require('./images/r.jpg'),
      s: require('./images/s.jpg'),
      t: require('./images/t.jpg'),
      u: require('./images/u.jpg'),
      v: require('./images/v.jpg'),
      w: require('./images/w.jpg'),
      x: require('./images/x.jpg'),
      y: require('./images/y.jpg'),
    }
    const imgSrc = imagePaths[props.letterClicked.toLowerCase()]

    return( 
        <View style={currentStyle.container}>
        <View style={currentStyle.header}>
          <Button title='Back' onPress={() => props.setShowLesson(false)}/>
          <Text style={currentStyle.title}>{props.letterClicked}</Text>
        </View>
        <View style={currentStyle.lessonInfo}>
            <Text style={currentStyle.lessonText}>{getLessonInfo(props.letterClicked)}</Text>
            <Image source={imgSrc} style={currentStyle.image} />
        </View>
        <View style={currentStyle.footer}>
        <Button title="Attempt" onPress={() => setShowCamera(true)}/>
        </View>
      </View>
    )
}

const lightMode = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
      },
      title: {
        fontWeight: 'bold',
        fontSize: 72,
        position: 'absolute',
        left: 16,
        top: 50,
      },
      lessonInfo: {
        marginBottom: 16,
      },
      lessonText: {
        lineHeight: 24, 
      },
      footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 150,
        height: 150,
      }
})

const darkMode = StyleSheet.create({
  container: {
      width: '100%',
      height: '100%',
      flex: 1,
      padding: 16,
      justifyContent: 'space-between',
      backgroundColor: 'rgb(40, 40, 40)'
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 20,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 72,
      position: 'absolute',
      left: 16,
      top: 50,
      color: 'white'
    },
    lessonInfo: {
      marginBottom: 16,
    },
    lessonText: {
      lineHeight: 24,
      color: 'white' 
    },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 150,
      height: 150,
    }
})