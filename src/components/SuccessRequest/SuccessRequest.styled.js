import styled from 'styled-components';

export const Container = styled.div`
  min-width: 280px;
  min-height: 120px;
  padding: 15px;
  background-color: ${(props) => props.theme.color.mainBackground};
  border-radius: 5px;
`;

export const Title = styled.h3`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.66;
`;

export const Text = styled.p`
  padding-bottom: 8px;
  font-size: 14px;
  line-height: 1.66;
`;

export const ExitLink = styled.a`
  color: ${(props) => props.theme.color.accent};
  cursor: pointer;
`;
