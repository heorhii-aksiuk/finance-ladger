import {
  Container,
  List,
  FacebookIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
  FacebookIconTeam,
  TwitterIconTeam,
  YoutubeIconTeam,
  LinkedinIconTeam,
} from './SocialLinks.styled'

export default function SocialLinks({ team }) {
  return (
    <Container>
      <List>
        <li>{team ? <FacebookIconTeam /> : <FacebookIcon />}</li>
        <li>{team ? <TwitterIconTeam /> : <TwitterIcon />}</li>
        <li>{team ? <YoutubeIconTeam /> : <YoutubeIcon />}</li>
        <li>{team ? <LinkedinIconTeam /> : <LinkedinIcon />}</li>
      </List>
    </Container>
  )
}
