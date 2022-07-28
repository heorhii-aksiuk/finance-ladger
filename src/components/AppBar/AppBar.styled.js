import styled from 'styled-components'

export const Bar = styled.header`
  position: fixed;
  height: 120px;
  width: 100%;
  padding-top: 27px;
  color: ${(props) => props.theme.color.secondaryText};
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    height: 70px;
  }
`

export const Navigation = styled.nav`
  padding: 12px 22px 0px 22px;
  margin: 0 auto;
  max-width: 480px;

  @media screen and (min-width: 768px) {
    padding: 8px 32px 0px 0px;
  }
`
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 335px;
  }
`
export const NavItem = styled.li`
  font-size: 16px;
  line-height: 1.6;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
  }
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
