/* eslint-disable prettier/prettier */
import { zodResolver } from "@hookform/resolvers/zod"
import { Play } from 'phosphor-react'
import { useForm } from "react-hook-form"
import * as zod from "zod"
import {
  CountdownContainer,
  FormContainer, HomeContainer,
  MinutesAmountInput,
  Separator,
  StarCountdownButton,
  TaskInput
} from './styles'

const cycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1, 'O ciclo precisa ser de no mínimo 1 minuto').max(99, "O ciclo precisa ser de no máximo 60 minuto"),
})

type NewCycleForm = zod.infer<typeof cycleFormValidationSchema>

export function Home() {

  const formControll = useForm<NewCycleForm>({
    resolver: zodResolver(cycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0
    }
  })
  const { register, handleSubmit, watch } = formControll

  const task = watch("task")
  const isDisabledForm = !task

  function handleCreateNewCycle(data: NewCycleForm) {


  }


  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="datalist-suggestion"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />

          <datalist id='datalist-suggestion'>
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Projeto 5" />
          </datalist>


          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            min={1}
            max={60}
            {...register("minutesAmount", {
              valueAsNumber: true
            })}

          />
          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StarCountdownButton type="submit" disabled={isDisabledForm}>
          <Play size={24} />
          Começar
        </StarCountdownButton>
      </form>
    </HomeContainer>
  )
}
