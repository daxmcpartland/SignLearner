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