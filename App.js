/*
 * App.js
 * App file for sign learner
 * 
 * Author: Dax McPartland
 * Date: July 29, 2023
*/
import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Startup from './src/components/Startup'

export default function App() {
  return(
    <ThemeProvider>
      <Startup/>
    </ThemeProvider>
  )
}