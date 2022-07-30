import { Container, Title, Text, ExitLink } from './SuccessRequest.styled';

export default function SuccessRequest({ onClose }) {
  return (
    <Container>
      <Title>Thank you!</Title>
      <Text>Your from submission has been received.</Text>
      <ExitLink onClick={onClose}>&#129044; Back to your site</ExitLink>
    </Container>
  );
}
