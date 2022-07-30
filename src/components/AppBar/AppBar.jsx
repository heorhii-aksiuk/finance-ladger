import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import LogoLink from '../LogoLink';
import {
  Bar,
  LogoBox,
  Navigation,
  NavList,
  NavItem,
  NavLink,
} from './AppBar.styled';

export default function AppBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const theme = useTheme();

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const appBarHeight = window.innerWidth < 768 ? 120 : 70;

  const setBackgroundColor = () =>
    scrollPosition > appBarHeight
      ? theme.color.appBarBackground
      : theme.color.appBarBackgroundTransparent;

  const backgroundColor = setBackgroundColor();

  return (
    <Bar style={{ backgroundColor }}>
      <LogoBox>
        <LogoLink />
      </LogoBox>
      <Navigation>
        <NavList>
          <NavItem>
            <NavLink to="home" smooth>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="about" smooth offset={appBarHeight * -1}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="cases" smooth offset={appBarHeight * -1}>
              Cases
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="blog" smooth offset={appBarHeight * -1}>
              Blog
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="contact" smooth offset={appBarHeight * -1}>
              Contact
            </NavLink>
          </NavItem>
        </NavList>
      </Navigation>
    </Bar>
  );
}
