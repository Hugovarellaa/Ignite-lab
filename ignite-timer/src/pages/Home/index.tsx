/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { zodResolver } from "@hookform/resolvers/zod";
import { differenceInSeconds } from "date-fns";
import { HandPalm, Play } from 'phosphor-react';
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import * as zod from "zod";
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
}


export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondPassed, setAmountSecondsPassed] = useState(0)

  const { register, reset, watch, handleSubmit } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

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

  const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: NodeJS.Timer

    if (activeCycle) {
      interval = setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        )
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes} : ${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  return (
    <styles.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <styles.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <styles.InputTask
            type="text"
            id="task"
            disabled={!!activeCycle}
            placeholder="Dê um nome para o seu projeto"
            list="task-suggest"
            {...register('task')}
          />

          <datalist id="task-suggest">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <styles.InputMinutesAmount
            type="number"
            id="minutesAmount"
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
            placeholder="00"
            min={1}
            max={99}
          />
          <span>minutos.</span>
        </styles.FormContainer>

        <styles.CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <styles.Separator>:</styles.Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </styles.CountdownContainer>

        {
          activeCycle ? (
            <styles.StopCountDownButton type="button" onClick={() => { }}>
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

