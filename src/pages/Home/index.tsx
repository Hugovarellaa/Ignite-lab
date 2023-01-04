import { zodResolver } from '@hookform/resolvers/zod'
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

import {
  HomeContainer,
  HomeCountDownContainer,
  HomeFormContainer,
  HomeMinutesAmountInput,
  HomeSeparator,
  HomeStartCountDownButton,
  HomeTaskInput,
} from './styles'

const newCycleFormSchema = zod.object({
  task: zod.string().min(3, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O tempo mínimo para a tarefa e de 1 minuto')
    .max(60, 'o tempo máximo para a tarefa e de 60 minutos'),
})

type formData = zod.infer<typeof newCycleFormSchema>

export default function Home() {
  const { register, handleSubmit, watch, formState } = useForm<formData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { errors } = formState
  console.log(errors)

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: formData) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <HomeFormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <HomeTaskInput
            type="text"
            id="task"
            list="task-suggestion"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestion">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
            <option value="Banana" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <HomeMinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            min={1}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </HomeFormContainer>

        <HomeCountDownContainer>
          <span>0</span>
          <span>0</span>
          <HomeSeparator>:</HomeSeparator>
          <span>0</span>
          <span>0</span>
        </HomeCountDownContainer>

        <HomeStartCountDownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} />
          Começar
        </HomeStartCountDownButton>
      </form>
    </HomeContainer>
  )
}
