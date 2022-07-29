/* eslint-disable prettier/prettier */
import { Play } from 'phosphor-react'
import {
  ContainerHome,
  CountdownContainer,
  FormContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput
} from './styles'

export function Home() {
  return (
    <ContainerHome>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="De um nome para o seu projeto"
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
          </datalist>
          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={0.5}
            min={1}
            max={60}
          />

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
