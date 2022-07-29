import { Play } from 'phosphor-react'
import {
  ContainerHome,
  CountdownContainer,
  FormContainer,
  Separator,
  // eslint-disable-next-line prettier/prettier
  StartCountDownButton
} from './styles'

export function Home() {
  return (
    <ContainerHome>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled type="submit">
          <Play size={24} />
          começar
        </StartCountDownButton>
      </form>
    </ContainerHome>
  )
}
