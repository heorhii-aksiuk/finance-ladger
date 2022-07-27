import styled from 'styled-components'

// const setBackground = () => {
//   console.log(window.screenTop)
//   return window.screenTop > 120 ? `rgba(0, 0, 0, 0.8)` : `rgba(0, 0, 0, 0.0)`
// }

// const background = setBackground()

export const Bar = styled.header`
  position: fixed;
  height: 120px;
  width: 100%;
  padding-top: 27px;
  color: ${(props) => props.theme.color.secondaryText};
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
`

export const Navigation = styled.nav`
  padding: 12px 22px 0px 22px;
  padding-top: 12px;
  margin: 0 auto;
  max-width: 480px;
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
