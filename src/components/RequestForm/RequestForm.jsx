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
} from './RequestForm.styled'
import { ReactComponent as WarningIcon } from './image/svg/warning.svg'
import formImage from './image/jpg/contact.jpg'

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email').required('Required'),
})

export default function RequestForm() {
  return (
    <Container id="contact">
      <Image src={formImage} />
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

          {/* {({ errors, touched }) => (
            <Form>
              <Field name="firstName" />
              {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null}
              <Field name="lastName" />
              {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null}
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <button type="submit">Submit</button>
            </Form>
          )} */}
        </Formik>
      </ContentBox>
    </Container>
  )
}
