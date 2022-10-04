/* eslint-disable prettier/prettier */
import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer, InputMinutesAmount, InputTask, Separator, StartCountDownButton
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
          />

          <label htmlFor="minutesAmount">durante</label>
          <InputMinutesAmount
            type="number"
            id="minutesAmount"
            placeholder="00"
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
