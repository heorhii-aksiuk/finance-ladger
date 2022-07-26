import styled from 'styled-components'
import { ReactComponent } from '../../images/svg/logoIcon.svg'

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Icon = styled(ReactComponent)`
  transition: ${(props) => props.theme.transition};
  fill: ${(props) => props.theme.color.accent};
`

export const Text = styled.p`
  padding-left: 5px;
  font-size: 32px;
  line-height: 1.32;
`
export const Accent = styled.span`
  transition: ${(props) => props.theme.transition};
  color: ${(props) => props.theme.color.accent};
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    transform: scale(1.05);
  }

  :hover ${Icon}, :focus ${Icon} {
    fill: ${(props) => props.theme.color.hoverAccent};
  }

  :hover ${Accent}, :focus ${Accent} {
    color: ${(props) => props.theme.color.hoverAccent};
  }
`
