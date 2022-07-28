import {
  Container,
  List,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
} from './SocialLinks.styled'

export default function SocialLinks() {
  return (
    <Container>
      <List>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <YoutubeIcon />
        </li>
        <li>
          <LinkedinIcon />
        </li>
      </List>
    </Container>
  )
}
