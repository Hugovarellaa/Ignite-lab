import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
export const HomeFormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

export const HomeCountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${({ theme }) => theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const HomeSeparator = styled.div`
  padding: 2rem 0;
  width: 4rem;
  overflow: hidden;

  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme['green-500']};
`

export const HomeStartCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;

  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`