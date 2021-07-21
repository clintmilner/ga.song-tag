import React, { Fragment } from 'react'
import { Router } from '@reach/router'
/** importing our pages here */
import Home from './pages/Home'
import Artist from './pages/Artist'
import styled from 'styled-components'

const App = () => {
  return (
    <StyledApp>
      <Router primary={false} component={Fragment}>
        <Home path="/" />
        <Artist path="/artist/:mbid" />
      </Router>
    </StyledApp>
  )
}

const StyledApp = styled.div`
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
`

export default App
