import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Bar = styled.header`
  position: fixed;
  width: 100%;
  height: 120px;
  padding: 21px 22px 0px 22px;
  color: ${(props) => props.theme.color.secondaryText};
  z-index: 100;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 70px;
    padding: 20px 32px 0px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 12px 28px 0px 28px;
  }
`;

export const LogoBox = styled.div`
  padding-bottom: 12px;

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;

export const Navigation = styled.nav`
  max-width: 480px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin: 0;
    margin-left: auto;
    padding-top: 8px;
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 335px;
  }

  @media screen and (min-width: 1360px) {
    width: 420px;
  }
`;
export const NavItem = styled.li`
  font-size: 16px;
  line-height: 1.6;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
  }
`;

export const NavLink = styled(Link)`
  padding-bottom: 18px;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    border-color: ${(props) => props.theme.color.accent};
  }

  :active {
    color: ${(props) => props.theme.color.accent};
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 12px;
  }

  @media screen and (min-width: 1360px) {
    padding-bottom: 20px;
  }
`;
