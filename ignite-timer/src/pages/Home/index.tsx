/* eslint-disable prettier/prettier */
import { zodResolver } from "@hookform/resolvers/zod"
import { differenceInSeconds } from "date-fns"
import { HandPalm, Play } from 'phosphor-react'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { Countdown } from "./components/Countdown"
import { NewCycleForm } from "./components/NewCycleForm"
import {
  HomeContainer, StarCountdownButton,
  StopCountdownButton
} from './styles'


const cycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1, 'O ciclo precisa ser de no mínimo 1 minuto').max(99, "O ciclo precisa ser de no máximo 60 minuto"),
})

type NewCycleForm = zod.infer<typeof cycleFormValidationSchema>

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const formControll = useForm<NewCycleForm>({
    resolver: zodResolver(cycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0
    }
  })
  const { register, handleSubmit, watch, reset } = formControll

  const task = watch("task")
  const isDisabledForm = !task

  function handleCreateNewCycle(data: NewCycleForm) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    }
    setCycles(oldState => [...oldState, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset()
  }

  function handleInterruptCycle() {
    setCycles(oldState =>
      oldState.map(cycle => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      })
    )

    setActiveCycleId(null)
  }

  console.log(cycles)

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsInDifference = differenceInSeconds(new Date(), activeCycle.startDate)
        if (secondsInDifference >= totalSeconds) {

          setCycles(oldState =>
            oldState.map(cycle => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            })
          )
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsInDifference)
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, activeCycleId, totalSeconds])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <NewCycleForm />

        <Countdown />

        {
          activeCycle ? (
            <StopCountdownButton type="button" onClick={handleInterruptCycle}>
              <HandPalm size={24} />
              Começar
            </StopCountdownButton>
          ) : (
            <StarCountdownButton type="submit" disabled={isDisabledForm}>
              <Play size={24} />
              Começar
            </StarCountdownButton>
          )
        }
      </form>
    </HomeContainer>
  )
}
