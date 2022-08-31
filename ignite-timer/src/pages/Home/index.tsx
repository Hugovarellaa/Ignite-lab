/* eslint-disable prettier/prettier */
import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer, MinutesAmountInput, Separator,
  StartCountdownButton,
  TaskInput
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">

        <datalist id="task-suggestion">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
          <option value="Projeto 4" />
          <option value="Banana" />
        </datalist>


        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
          />
          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={95}
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

        <StartCountdownButton>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
