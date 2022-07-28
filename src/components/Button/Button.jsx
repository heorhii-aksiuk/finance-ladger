import {
  Accent,
  AccentForm,
  AccentWithBorder,
  BlogWithBorder,
} from './Button.styled'

export default function Button({
  accent,
  accentForm,
  accentWithBorder,
  blogWithBorder,
  children,
}) {
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
