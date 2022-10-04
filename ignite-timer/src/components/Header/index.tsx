import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logoImg from '../../assets/Logo.svg'
import { HeaderConttainer } from './styles'

export function Header() {
  return (
    <HeaderConttainer>
      <img src={logoImg} alt="" />

      <nav>
        <NavLink to="/" end title="Home">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" end title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderConttainer>
  )
}
