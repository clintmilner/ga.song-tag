import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/colors'

const colorTheme = 'DARK'
// const colorTheme = 'LIGHT'
console.info(theme(colorTheme))

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme(colorTheme)}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
