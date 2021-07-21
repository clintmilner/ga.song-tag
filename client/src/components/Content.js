import styled from 'styled-components'
import { widths } from '../styles'

const ContentSection = ({ children }) => {
  return <ContentDiv>{children}</ContentDiv>
}

export default ContentSection

const ContentDiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  max-width: ${widths.textPageWidth};
  width: 100%;
  align-self: center;
  background: gold;
`
