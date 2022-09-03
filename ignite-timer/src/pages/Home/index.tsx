/* eslint-disable prettier/prettier */
import { zodResolver } from "@hookform/resolvers/zod"
import { differenceInSeconds } from "date-fns"
import { HandPalm, Play } from 'phosphor-react'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as zod from "zod"
import { Countdown } from "./components/CountDown"
import { NewCycleForm } from "./components/NewCycleForm"
import {
  HomeContainer, StartCountdownButton,
  StopCountDownButton
} from './styles'


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(1, "O intervalo precisa ser de no máximo 60 minutos").max(95, "O intervalo precisa ser de no mínimo 95 minutos")
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string;
  task: string
  minutesAmount: number;
  startDate: Date
  interruptDate?: Date
  finishDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)


  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0
    }
  })
  const task = watch("task")
  const isSubmitDisabled = !task

  function handleInterruptCycle() {
    setCycles(oldState => oldState.map(cycle => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, interruptDate: new Date() }
      } else {
        return cycle
      }
    }))
    setActiveCycleId(null)
  }

  function handleSubmitForm(data: NewCycleFormData) {
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

  const activelycle = cycles.find(cycle => cycle.id === activeCycleId)
  const totalSeconds = activelycle ? activelycle.minutesAmount * 60 : 0
  const currentSeconds = activelycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, "0")
  const seconds = String(secondsAmount).padStart(2, "0")


  useEffect(() => {
    let interval: number

    if (activelycle) {

      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(new Date(), activelycle.startDate)

        if (secondsDifference >= totalSeconds) {
          setCycles(oldState => oldState.map(cycle => {
            if (cycle.id === activeCycleId) {
              return { ...cycle, finishDate: new Date() }
            } else {
              return cycle
            }
          }))
          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDifference)
        }


      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycleId, activelycle, totalSeconds])

  useEffect(() => {
    if (activelycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds])

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleSubmitForm)}>

        <datalist id="task-suggestion">
          <option value="Projeto 1" />
          <option value="Projeto 2" />
          <option value="Projeto 3" />
          <option value="Projeto 4" />
          <option value="Banana" />
        </datalist>

        <NewCycleForm />
        <Countdown />

        {
          activelycle ? (
            <StopCountDownButton type="button" onClick={handleInterruptCycle} >
              <HandPalm size={24} />
              Interromper
            </StopCountDownButton>
          ) : (
            <StartCountdownButton disabled={isSubmitDisabled} type="submit">
              <Play size={24} />
              Começar
            </StartCountdownButton>
          )
        }
      </form>
    </HomeContainer >
  )
}
