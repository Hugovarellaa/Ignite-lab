import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import { useCycle } from '../../context/useCycle'
import { HistoryContainer, HistoryList, HistoryStatus } from './styles'

export function History() {
  const { cycles } = useCycle()
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{`${cycle.minutesAmount} minutos`}</td>
                <td>
                  {formatDistanceToNow(cycle.startDate, {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishDate && (
                    <HistoryStatus status_color="green">
                      Concluído
                    </HistoryStatus>
                  )}
                  {cycle.interruptDate && (
                    <HistoryStatus status_color="red">
                      Interrompido
                    </HistoryStatus>
                  )}
                  {!cycle.finishDate && !cycle.interruptDate && (
                    <HistoryStatus status_color="yellow">
                      Em andamento
                    </HistoryStatus>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
