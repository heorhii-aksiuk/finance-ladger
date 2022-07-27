import {
  Accent,
  AccentForm,
  AccentWithBorder,
  BlogWithBorder,
} from './Button.styled'

export default function Button({ blog, boarder, wide, children }) {
  const accent = !blog && !boarder && !wide
  const accentForm = !blog && !boarder && wide
  const accentWithBorder = !blog && boarder && !wide
  const blogWithBorder = blog && boarder && !wide
  return (
    <>
      {accent && <Accent type="button">{children}</Accent>}
      {accentForm && <AccentForm type="submit">{children}</AccentForm>}
      {accentWithBorder && (
        <AccentWithBorder type="button">{children}</AccentWithBorder>
      )}
      {blogWithBorder && (
        <BlogWithBorder type="button">{children}</BlogWithBorder>
      )}
    </>
  )
}
