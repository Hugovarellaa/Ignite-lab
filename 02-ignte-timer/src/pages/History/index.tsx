import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <span>
                  <Status statusColor="green">Concluído</Status>
                </span>
              </td>
            </tr>

            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <span>
                  <Status statusColor="yellow">Em andamento</Status>
                </span>
              </td>
            </tr>

            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <span>
                  <Status statusColor="red">Interropido</Status>
                </span>
              </td>
            </tr>

            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <span>
                  <Status statusColor="green">Concluído</Status>
                </span>
              </td>
            </tr>

            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <span>
                  <Status statusColor="green">Concluído</Status>
                </span>
              </td>
            </tr>

            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <span>
                  <Status statusColor="green">Concluído</Status>
                </span>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <span>
                  <Status statusColor="green">Concluído</Status>
                </span>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <span>
                  <Status statusColor="green">Concluído</Status>
                </span>
              </td>
            </tr>
            <tr>
              <td>Projeto 1</td>
              <td>20 minutos</td>
              <td>há cerca de 2 meses</td>
              <td>
                <span>
                  <Status statusColor="green">Concluído</Status>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
