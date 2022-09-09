import { useFormContext } from 'react-hook-form'
import { useCycle } from '../../../../context/useCycle'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useCycle()
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        disabled={!!activeCycle}
        list="datalist-suggestion"
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <datalist id="datalist-suggestion">
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
        disabled={!!activeCycle}
        min={1}
        max={60}
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />
      <span>minutos</span>
    </FormContainer>
  )
}
