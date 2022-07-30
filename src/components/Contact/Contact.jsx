import { Formik, Form as NetlifyInput } from 'formik';
import * as Yup from 'yup';
import { useToggle } from '../../hooks';
import Button from '../Button';
import Modal from '../Modal';
import SuccessRequest from '../SuccessRequest';
import {
  Container,
  ContentBox,
  Image,
  FormTitle,
  StyledForm as Form,
  StyledField as Field,
  ButtonBox,
  WarningName,
  WarningEmail,
  WarningText,
} from './Contact.styled';
import { ReactComponent as WarningIcon } from './img/svg/warning.svg';

import contact from './img/contact.jpg';
import contact2x from './img/contact@2x.jpg';
import contactWebP from './img/contact.webp';
import contactWebP2x from './img/contact@2x.webp';

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Name is too short!').max(50, 'Name is too long!'),
  email: Yup.string()
    .email('Invalid email!')
    .required('This is a required field!'),
});

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export default function Contact() {
  const [showModal, toggleModal] = useToggle(false);

  const handleSubmit = async (values) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => toggleModal())
      .catch((error) => alert(error));
  };

  return (
    <>
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
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form name="contact" method="post">
                <NetlifyInput
                  type="hidden"
                  name="contact-form"
                  value="contact"
                />
                <Field
                  name="name"
                  placeholder="Enter your name"
                  title="Enter your name"
                />
                {errors.name && touched.name && (
                  <WarningName>
                    <WarningIcon />
                    <WarningText>{errors.name}</WarningText>
                  </WarningName>
                )}
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter email*"
                  title="Enter email*"
                />
                {errors.email && touched.email && (
                  <WarningEmail>
                    <WarningIcon />
                    <WarningText>{errors.email}</WarningText>
                  </WarningEmail>
                )}
                <ButtonBox>
                  <Button accentForm disabled={errors}>
                    Send
                  </Button>
                </ButtonBox>
              </Form>
            )}
          </Formik>
        </ContentBox>
      </Container>
      {showModal && (
        <Modal onClose={() => toggleModal()}>
          <SuccessRequest onClose={() => toggleModal()} />
        </Modal>
      )}
    </>
  );
}
