import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${({ theme }) => theme['gray-800']};
  border-radius: 8px;

  overflow: hidden;

  display: flex;
  flex-direction: column;
`