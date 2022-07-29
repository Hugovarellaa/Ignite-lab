import { Play } from 'phosphor-react'
import { ContainerHome, CountdownContainer, FormContainer } from './styles'

export function Home() {
  return (
    <ContainerHome>
      <FormContainer>
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutesAmount">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos</span>
        </div>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          começar
        </button>
      </FormContainer>
    </ContainerHome>
  )
}
