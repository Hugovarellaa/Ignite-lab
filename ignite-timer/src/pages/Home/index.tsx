/* eslint-disable prettier/prettier */
import { zodResolver } from "@hookform/resolvers/zod"
import { Play } from 'phosphor-react'
import { useForm } from "react-hook-form"
import * as zod from "zod"
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmount,
  Separator,
  StartCountdownButton,
  TaskInput
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(5, "A duração minima é de 5 minutos").max(60, "A duração maxima é de 60 minutos"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    }
  })

  const task = watch("task")
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: any) {
    console.log(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>

        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggest"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />

          <datalist id="task-suggest">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Banana" />
            <option value="Alguma coisa" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmount
            type="number"
            id="minutesAmount"
            placeholder="00"
            max={60}
            min={5}
            step={5}
            {...register("minutesAmount", {
              valueAsNumber: true,
            })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </StartCountdownButton>

      </form>
    </HomeContainer>
  )
}
