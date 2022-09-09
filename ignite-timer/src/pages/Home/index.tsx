/* eslint-disable prettier/prettier */
import { zodResolver } from '@hookform/resolvers/zod'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { useCycle } from '../../context/useCycle'
import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import {
  HomeContainer,
  StarCountdownButton,
  StopCountdownButton
} from './styles'

const cycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 1 minuto')
    .max(99, 'O ciclo precisa ser de no máximo 60 minuto'),
})

type NewCycleFormData = zod.infer<typeof cycleFormValidationSchema>



export function Home() {
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useCycle()


  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(cycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { handleSubmit, watch, reset } = newCycleForm

  const task = watch('task')
  const isDisabledForm = !task


  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }

  function handleInterruptCycle() {
    interruptCurrentCycle()
  }


  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>

        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            Começar
          </StopCountdownButton>
        ) : (
          <StarCountdownButton type="submit" disabled={isDisabledForm}>
            <Play size={24} />
            Começar
          </StarCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
