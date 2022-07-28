import { Container, ContentBox, Copyright } from './Footer.styled'
import SocialLinks from '../SocialLinks'

export default function Footer() {
  return (
    <Container>
      <ContentBox>
        <SocialLinks />
        <Copyright>Copyright © 2021 - FinanceLedger</Copyright>
      </ContentBox>
    </Container>
  )
}
