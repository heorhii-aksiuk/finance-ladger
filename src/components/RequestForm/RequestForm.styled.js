import styled from 'styled-components'
import { Field } from 'formik'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img``

export const ContentBox = styled.div`
  padding: 40px 20px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.formBackground};
`

export const FormTitle = styled.h2`
  padding-bottom: 32px;
  width: 150px;
  font-size: 38px;
  font-weight: 300;
  line-height: 1.26;
`

export const RequestField = styled(Field)`
  width: 100%;
  margin-bottom: 32px;
  height: 40px;
  background-color: ${(props) => props.theme.color.mainBackground};
  border: none;

  ::placeholder {
    color: ${(props) => props.theme.color.placeholderText};
  }
`
