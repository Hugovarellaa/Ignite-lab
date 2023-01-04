import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useCycle } from '../../context/useCycle'
import { CountDown } from './components/CountDown'
import { NewCycleForm } from './components/NewCycleForm'

import {
  HomeContainer,
  HomeStartCountDownButton,
  HomeStoptCountDownButton,
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
  const { activeCycle, interruptCycle, createCycle } = useCycle()

  const newCycleForm = useForm<formData>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: formData) {
    createCycle(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <CountDown />

        {activeCycle ? (
          <HomeStoptCountDownButton type="button" onClick={interruptCycle}>
            <HandPalm size={24} />
            Interromper
          </HomeStoptCountDownButton>
        ) : (
          <HomeStartCountDownButton type="submit" disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </HomeStartCountDownButton>
        )}
      </form>
    </HomeContainer>
  )
}
