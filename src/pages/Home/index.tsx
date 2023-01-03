import { Play } from 'phosphor-react'
import {
  HomeContainer,
  HomeCountDownContainer,
  HomeFormContainer,
  HomeMinutesAmountInput,
  HomeSeparator,
  HomeStartCountDownButton,
  HomeTaskInput,
} from './styles'

export default function Home() {
  return (
    <HomeContainer>
      <form>
        <HomeFormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <HomeTaskInput
            type="text"
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <HomeMinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />
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
