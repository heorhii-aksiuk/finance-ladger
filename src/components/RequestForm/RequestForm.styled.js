import styled from 'styled-components'
import { Field } from 'formik'

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

export const Image = styled.img`
  @media screen and (min-width: 768px) {
    width: 48vw;
    object-fit: cover;
  }
`

export const ContentBox = styled.div`
  padding: 40px 20px;
  background-color: ${(props) => props.theme.color.formBackground};

  @media screen and (min-width: 768px) {
    width: 52vw;
    padding: 40px 32px;
  }

  @media screen and (min-width: 1360px) {
    padding: 80px 28px 80px 20px;
  }
`

export const FormTitle = styled.h2`
  padding-bottom: 32px;
  width: 150px;
  font-size: 38px;
  font-weight: 300;
  line-height: 1.26;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const StyledField = styled(Field)`
  width: 100%;
  margin-bottom: 32px;
  height: 40px;
  background-color: ${(props) => props.theme.color.mainBackground};
  border: none;

  ::placeholder {
    font-size: 16px;
    line-height: 1.44;
    color: ${(props) => props.theme.color.placeholderText};
  }

  @media screen and (min-width: 768px) {
    width: 97%;
  }
`

export const ButtonBox = styled.div`
  @media screen and (min-width: 768px) {
    padding-top: 10px;
  }

  @media screen and (min-width: 1360px) {
    padding-top: 28px;
  }
`
