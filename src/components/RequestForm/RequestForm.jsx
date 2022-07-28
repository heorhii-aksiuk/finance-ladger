import { Formik, Form } from 'formik'
import Button from '../Button'
import {
  Container,
  ContentBox,
  Image,
  FormTitle,
  StyledField as Field,
} from './RequestForm.styled'
import formImage from './image/jpg/contact.jpg'

export default function RequestForm() {
  return (
    <Container>
      <Image src={formImage} />
      <ContentBox>
        <FormTitle>Request Callback</FormTitle>
        <Formik
          initialValues={{
            name: '',
            email: '',
          }}
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        >
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
            <Button accentForm>Send</Button>
          </Form>
        </Formik>
      </ContentBox>
    </Container>
  )
}
