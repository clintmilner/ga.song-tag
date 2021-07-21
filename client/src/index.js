import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/colors'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const colorTheme = 'DARK'
// const colorTheme = 'LIGHT'
console.info(theme(colorTheme))

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme(colorTheme)}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
