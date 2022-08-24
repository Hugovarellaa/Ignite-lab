import { Play } from 'phosphor-react'
import {
  CountDouwnContainer,
  FormContainer,
  HomeContainer,
  Separator
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <input type="text" id="task" />
          <label htmlFor="minutesAmountDuration">durante</label>
          <input type="number" id="minutesAmountDuration" />
          <span>minutos</span>
        </FormContainer>

        <CountDouwnContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDouwnContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </form>
    </HomeContainer>
  )
}
