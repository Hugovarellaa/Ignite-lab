/* eslint-disable prettier/prettier */
import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
  useState
} from 'react'
import { ActionTypes, cyclesReducer } from '../reducers/cycles'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CreateCycleData {
  task: string
  minutesAmount: number
}

interface CyclesContextData {
  cycles: Cycle[]
  amountSecondPassed: number
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
  interruptCurrentCycle: () => void
  amountSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
}

interface CycleProviderProps {
  children: ReactNode
}

const CyclesContext = createContext({} as CyclesContextData)

export function CyclesContextProvider({ children }: CycleProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
  )

  const [amountSecondPassed, setAmountSecondsPassed] = useState(0)

  const { activeCycleId, cycles } = cyclesState

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

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

  function interruptCurrentCycle() {
    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      },
    })
  }

  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionTypes.MARKK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId,
      },
    })
  }

  function amountSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondPassed,
        amountSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export const useCycle = () => useContext(CyclesContext)
