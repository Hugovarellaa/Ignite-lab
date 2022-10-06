import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../..'
import { FormContainer, InputMinutesAmount, InputTask } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <InputTask
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
      <InputMinutesAmount
        type="number"
        id="minutesAmount"
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
        placeholder="00"
        min={1}
        max={99}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
