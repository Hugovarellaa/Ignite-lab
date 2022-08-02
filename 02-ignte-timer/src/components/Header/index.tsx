import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <nav>
        <a href="">Timer</a>
        <a href="">Hsitory</a>
      </nav>
    </HeaderContainer>
  )
}
