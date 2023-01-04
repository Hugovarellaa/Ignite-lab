import { createContext, ReactNode, useContext, useState } from 'react'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptDate?: Date
  finishDate?: Date
}

type formData = {
  task: string
  minutesAmount: number
}

interface CycleContextData {
  activeCycleId: string | null
  amountSecondsPassed: number
  activeCycle: Cycle | undefined
  marCurrentCycleAsFinished: () => void
  interruptCycle: () => void
  setSecondsPassed: (seconds: number) => void
  createCycle: (data: formData) => void
}

interface CycleProviderProps {
  children: ReactNode
}

const CycleContext = createContext({} as CycleContextData)

export function CycleProvider({ children }: CycleProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function interruptCycle() {
    setCycles((oldSate) =>
      oldSate.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptDate: new Date() }
        }

        return cycle
      }),
    )
    setActiveCycleId(null)
  }

  function marCurrentCycleAsFinished() {
    setCycles((oldSate) =>
      oldSate.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishDate: new Date() }
        }
        return cycle
      }),
    )
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createCycle(data: formData) {
    const id = new Date().getTime().toString()

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((oldState) => [...oldState, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  return (
    <CycleContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        interruptCycle,
        createCycle,
        amountSecondsPassed,
        marCurrentCycleAsFinished,
        setSecondsPassed,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}

export const useCycle = () => useContext(CycleContext)
