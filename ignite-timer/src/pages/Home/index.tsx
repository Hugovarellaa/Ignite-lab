/* eslint-disable prettier/prettier */
import { zodResolver } from "@hookform/resolvers/zod"
import { Play } from 'phosphor-react'
import { useForm } from "react-hook-form"
import * as zod from "zod"
import {
  CountdownContainer,
  FormContainer,
  HomeContainer, MinutesAmountInput, Separator,
  StartCountdownButton,
  TaskInput
} from './styles'


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(5, "O intervalo precisa ser de no máximo 60 minutos").max(95, "O intervalo precisa ser de no mínimo 95 minutos")
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0
    }
  })

  const task = watch("task")
  const isSubmitDisabled = !task

  function handleSubmitForm(data: NewCycleFormData) {
    console.log(data)
    reset()
  }


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


        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
            {...register("task")}
          />
          <label htmlFor="minutesAmount">Durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            min={5}
            max={95}
            {...register("minutesAmount", { valueAsNumber: true })}
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

        <StartCountdownButton disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
