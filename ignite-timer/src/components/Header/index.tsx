import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
