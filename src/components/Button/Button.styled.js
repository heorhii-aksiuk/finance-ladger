import styled from 'styled-components';
import arrow from './img/arrow.png';

const Base = styled.button`
  position: relative;
  padding: 10px 30px;
  font-size: 16px;
  line-height: 1.6;
  text-transform: capitalize;
  color: ${(props) => props.theme.color.secondaryText};
  background-color: ${(props) => props.theme.color.accent};
  border: none;
  border-radius: 5px;
  opacity: 0.85;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 30px 10px 40px;
    font-size: 18px;
    line-height: 1.56;
  }
`;

export const Accent = styled(Base)`
  @media screen and (min-width: 768px) {
    ::before {
      content: '';
      position: absolute;
      left: 25px;
      top: 15px;
      display: inline-block;
      width: 9px;
      height: 18px;
      background-size: contain;
      background-image: url(${arrow});
    }
  }
`;

export const AccentForm = styled(Base)`
  width: 100%;
`;

export const AccentWithBorder = styled(Base)`
  opacity: 1;
  border: 1px solid ${(props) => props.theme.color.secondaryText};

  :hover,
  :focus {
    color: ${(props) => props.theme.color.accent};
    background-color: ${(props) => props.theme.color.secondaryText};
  }
`;

export const BlogWithBorder = styled(AccentWithBorder)`
  background-color: ${(props) => props.theme.color.blogBackground};

  :hover,
  :focus {
    color: ${(props) => props.theme.color.blogBackground};
  }
`;
