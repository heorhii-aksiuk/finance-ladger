import styled from 'styled-components'

export const Bar = styled.header`
  position: fixed;
  height: 120px;
  width: 100%;
  padding-top: 27px;
  /* background-color: rgba(0, 0, 0, 0.3); */
  color: ${(props) => props.theme.color.secondaryText};
`

export const Navigation = styled.nav`
  padding-top: 12px;
  margin: 0 auto;
  width: 276px;
`
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`
export const NavItem = styled.li`
  font-size: 16px;
  line-height: 1.6;
`

export const NavLink = styled.a`
  padding-bottom: 10px;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    border-color: ${(props) => props.theme.color.accent};
  }

  :active {
    color: ${(props) => props.theme.color.accent};
  }
`
