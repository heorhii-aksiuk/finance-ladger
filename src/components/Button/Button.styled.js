import styled from 'styled-components'

export const Accent = styled.button`
  min-width: 156px;
  height: 45px;
  font-size: 16px;
  line-height: 1.6;
  text-transform: capitalize;
  color: ${(props) => props.theme.color.secondaryText};
  background-color: ${(props) => props.theme.color.accent};
  border: none;
  border-radius: 5px;
  opacity: 0.85;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  :hover,
  :focus {
    opacity: 1;
  }
`

export const AccentForm = styled.button``

export const AccentWithBorder = styled(Accent)`
  border: 1px solid ${(props) => props.theme.color.secondaryText};

  :hover,
  :focus {
    color: ${(props) => props.theme.color.accent};
    background-color: ${(props) => props.theme.color.secondaryText};
  }
`

export const BlogWithBorder = styled.button``
