import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  @media screen and (min-width: 768px) {
    width: 48vw;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentBox = styled.div`
  padding: 40px 30px;
  margin: 0 auto;
  color: ${(props) => props.theme.color.secondaryText};
  background-color: ${(props) => props.theme.color.accent};

  @media screen and (min-width: 768px) {
    width: 52vw;
    padding: 40px 53px 40px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 64px 80px 20px;
  }
`;

export const PreTitle = styled.p`
  padding-bottom: 8px;
  font-size: 18px;
  line-height: 1.66;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.65;
  }
`;

export const Title = styled.h2`
  padding-bottom: 24px;
  font-size: 38px;
  font-weight: 300;
  line-height: 1.26;

  @media screen and (min-width: 768px) {
    width: 204px;
  }

  @media screen and (min-width: 768px) {
    width: unset;
  }
`;

export const Paragraph = styled.p`
  padding-bottom: 24px;
  font-size: 16px;
  line-height: 1.6;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.56;
  }
`;
