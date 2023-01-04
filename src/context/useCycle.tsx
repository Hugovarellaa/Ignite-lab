import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState,
} from 'react'
import { ActionTypes, Cycle, cyclesReducer } from '../reducers/cycles'

interface formData {
  task: string
  minutesAmount: number
}

interface CycleContextData {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
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
  const [cyclesState, dispatch] = useReducer(cyclesReducer, {
    cycles: [],
    activeCycleId: null,
  })

  const { cycles, activeCycleId } = cyclesState
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function interruptCycle() {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      },
    })
  }

  function marCurrentCycleAsFinished() {
    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId,
      },
    })
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
    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      },
    })

    setAmountSecondsPassed(0)
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
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
