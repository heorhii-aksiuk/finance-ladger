import { Formik } from 'formik'
import * as Yup from 'yup'
import Button from '../Button'
import {
  Container,
  ContentBox,
  Image,
  FormTitle,
  StyledForm as Form,
  StyledField as Field,
  ButtonBox,
  Warning,
  WarningText,
} from './Contact.styled'
import { ReactComponent as WarningIcon } from './img/svg/warning.svg'

import contact from './img/contact.jpg'
import contact2x from './img/contact@2x.jpg'
import contactWebP from './img/contact.webp'
import contactWebP2x from './img/contact@2x.webp'

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Required'),
})

export default function Contact() {
  return (
    <Container id="contact">
      <picture>
        <source
          srcSet={`${contactWebP} 1x, ${contactWebP2x} 2x`}
          type="image/webp"
        />
        <source srcSet={`${contact} 1x, ${contact2x} 2x`} type="image/jpeg" />
        <Image src={contact} alt="Man with phone" />
      </picture>
      <ContentBox>
        <FormTitle>Request Callback</FormTitle>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          validationSchema={schema}
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="name"
                placeholder="Enter your name"
                title="Enter your name"
              />
              <Field
                name="email"
                type="email"
                placeholder="Enter email*"
                title="Enter email*"
              />
              {errors.email && touched.email && (
                <Warning>
                  <WarningIcon />
                  <WarningText>This is a required field</WarningText>
                </Warning>
              )}
              <ButtonBox>
                <Button accentForm>Send</Button>
              </ButtonBox>
            </Form>
          )}
        </Formik>
      </ContentBox>
    </Container>
  )
}
