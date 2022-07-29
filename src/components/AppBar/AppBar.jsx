import {
  Bar,
  LogoBox,
  Navigation,
  NavList,
  NavItem,
  NavLink,
} from './AppBar.styled'
import LogoLink from '../LogoLink'

export default function AppBar() {
  return (
    <Bar>
      <LogoBox>
        <LogoLink />
      </LogoBox>
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Cases</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contact</NavLink>
          </NavItem>
        </NavList>
      </Navigation>
    </Bar>
  )
}
