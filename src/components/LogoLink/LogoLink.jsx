import { LogoBox, Icon, NavLink, Text, Accent } from './LogoLink.styled'

export default function LogoLink() {
  return (
    <LogoBox>
      <NavLink to="home" smooth>
        <Icon />
        <Text>
          <Accent>Finance</Accent>Ledger
        </Text>
      </NavLink>
    </LogoBox>
  )
}
