import { Link } from '@reach/router'
import styled from 'styled-components'
import { logo } from '../assets/logo'

const Header = () => (
  <HeaderBar>
    <Link to="/">
      <Logo>{logo}</Logo>
    </Link>
    <InfoContainer>
      <Link to="/artist/bf600e2b-dc2d-4839-a1be-6ebef4087cd0">311</Link>
      <Link to="/artist/8bfac288-ccc5-448d-9573-c33ea2aa5c30">RHCP</Link>
    </InfoContainer>
  </HeaderBar>
)
export default Header

const Logo = styled.div`
  width: 65px;
  display: flex;
  flex: 1;
`
const InfoContainer = styled.nav`
  display: flex;
  align-self: flex-end;
  background: hotpink;
  align-items: center;
  height: 80px;
`

const HeaderBar = styled.header`
  background: ${({ theme }) => theme.headerBG};
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.headerBorder};
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.15);
  padding: 5px 30px;
`
