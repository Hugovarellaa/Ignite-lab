import { Play } from 'phosphor-react'
import {
  HomeContainer,
  HomeCountDownContainer,
  HomeFormContainer,
  HomeSeparator,
  HomeStartCountDownButton,
} from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <form>
        <HomeFormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input type="text" id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />
          <span>minutos.</span>
        </HomeFormContainer>

        <HomeCountDownContainer>
          <span>0</span>
          <span>0</span>
          <HomeSeparator>:</HomeSeparator>
          <span>0</span>
          <span>0</span>
        </HomeCountDownContainer>

        <HomeStartCountDownButton type="submit">
          <Play size={24} />
          Começar
        </HomeStartCountDownButton>
      </form>
    </HomeContainer>
  )
}
