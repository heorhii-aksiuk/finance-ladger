import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 48vw;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentBox = styled.div`
  margin: 0 auto;
  padding: 40px 30px;
  color: ${(props) => props.theme.color.secondaryText};
  background-color: ${(props) => props.theme.color.blogBackground};

  @media screen and (min-width: 768px) {
    width: 52vw;
    padding: 40px 53px 40px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 56px 80px 28px;
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
