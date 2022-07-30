import styled from 'styled-components';
import { ReactComponent as Facebook } from './img/svg/facebook.svg';
import { ReactComponent as Twitter } from './img/svg/twitter.svg';
import { ReactComponent as Youtube } from './img/svg/youtube.svg';
import { ReactComponent as Linkedin } from './img/svg/linkedin.svg';

export const Container = styled.div`
  width: 216px;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const FacebookIcon = styled(Facebook)`
  height: 35px;
  transition: ${(props) => props.theme.transition};
  cursor: pointer;
  :hover,
  :focus {
    fill: ${(props) => props.theme.color.accent};
  }
`;

export const TwitterIcon = styled(Twitter)`
  height: 35px;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    fill: ${(props) => props.theme.color.accent};
  }
`;

export const YoutubeIcon = styled(Youtube)`
  height: 35px;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    fill: ${(props) => props.theme.color.accent};
  }
`;

export const LinkedinIcon = styled(Linkedin)`
  height: 31px;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    fill: ${(props) => props.theme.color.accent};
  }
`;

export const FacebookIconTeam = styled(FacebookIcon)`
  :hover,
  :focus {
    fill: currentColor;
    opacity: 0.8;
  }
`;

export const TwitterIconTeam = styled(TwitterIcon)`
  :hover,
  :focus {
    fill: currentColor;
    opacity: 0.8;
  }
`;

export const YoutubeIconTeam = styled(YoutubeIcon)`
  :hover,
  :focus {
    fill: currentColor;
    opacity: 0.8;
  }
`;

export const LinkedinIconTeam = styled(LinkedinIcon)`
  :hover,
  :focus {
    fill: currentColor;
    opacity: 0.8;
  }
`;
