import React from 'react'
import { widths, unit } from '../styles'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout = ({ fullWidth, children, grid }) => {
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid={grid}>
        {children}
      </PageContainer>
      <Footer />
    </>
  )
}

export default Layout

/** Layout styled components */
const PageContainer = styled.main`
  display: flex;
  justify-content: ${({ grid }) => (grid ? 'center' : 'top')};
  flex-direction: ${({ grid }) => (grid ? 'row' : 'column')};
  flex-wrap: wrap;
  align-self: center;
  flex-grow: 1;
  width: 100%;
  max-width: ${({ fullWidth }) => fullWidth && widths.regularPageWidth}px;
  padding: ${({ fullWidth }) => (fullWidth ? 0 : unit * 2)}px;
  padding-bottom: ${unit * 5}px;
`
