/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from 'phosphor-react';
import { createContext, useState } from "react";
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from "zod";
import { CountDown } from "./components/CountDown";
import { NewCycleForm } from "./components/NewCycleForm";
import * as styles from './styles';


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1, 'O tempo mínimo é de 1 minuto').max(99, "O tempo máximo é 99 minutos"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
}

interface CyclesContextData {
  amountSecondPassed: number
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  markCurrentCycleAsFinished: () => void
  amountSecondsPassed: (seconds: number) => void
}

export const CyclesContext = createContext({} as CyclesContextData)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondPassed, setAmountSecondsPassed] = useState(0)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const {  reset, watch, handleSubmit } = newCycleForm

  const task = watch('task')
  const isDisabledSubmit = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }

    setCycles(oldCycle => [...oldCycle, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset()
  }

  function handleInterruptCycle() {
    setCycles(oldCycle =>
      oldCycle.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }))
    setActiveCycleId(null)
  }

  function markCurrentCycleAsFinished() {
    setCycles((oldCycle) =>
      oldCycle.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function amountSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  return (
    <styles.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>

        <CyclesContext.Provider value={{
          activeCycle,
          activeCycleId,
          markCurrentCycleAsFinished,
          amountSecondPassed,
          amountSecondsPassed
        }}>
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />

        </CyclesContext.Provider>
        {
          activeCycle ? (
            <styles.StopCountDownButton type="button" onClick={handleInterruptCycle}>
              <HandPalm size={24} />
              Começar
            </styles.StopCountDownButton>
          ) : (
            <styles.StartCountDownButton type="submit" disabled={isDisabledSubmit}>
              <Play size={24} />
              Começar
            </styles.StartCountDownButton>
          )
        }
      </form>
    </styles.HomeContainer>
  )
}

