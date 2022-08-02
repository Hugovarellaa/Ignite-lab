import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <label htmlFor="task">Vou trabalhar em</label>
        <input type="text" id="task" />

        <label htmlFor="minutesAmount">Durante</label>
        <input type="number" id="minutesAmount" />

        <span>minutos.</span>
      </form>
    </HomeContainer>
  )
}
