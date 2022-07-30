import styled from 'styled-components';
import { Link } from 'react-scroll';
import { ReactComponent } from './img/svg/logoIcon.svg';

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Icon = styled(ReactComponent)`
  fill: ${(props) => props.theme.color.accent};
  transition: ${(props) => props.theme.transition};
`;

export const Text = styled.p`
  padding-left: 5px;
  font-size: 32px;
  line-height: 1.32;

  @media screen and (min-width: 768px) {
    font-size: 35px;
    line-height: 1.21;
  }
`;
export const Accent = styled.span`
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.color.accent};
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    transform: scale(1.05);
  }

  :hover ${Icon}, :focus ${Icon} {
    fill: ${(props) => props.theme.color.hoverAccent};
  }

  :hover ${Accent}, :focus ${Accent} {
    color: ${(props) => props.theme.color.hoverAccent};
  }
`;
