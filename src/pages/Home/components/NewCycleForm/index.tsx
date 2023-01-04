import { useFormContext } from 'react-hook-form'
import { useCycle } from '../../../../context/useCycle'
import {
  HomeFormContainer,
  HomeMinutesAmountInput,
  HomeTaskInput,
} from './styles'

export function NewCycleForm() {
  const { activeCycle } = useCycle()
  const { register } = useFormContext()
  return (
    <HomeFormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <HomeTaskInput
        type="text"
        id="task"
        list="task-suggestion"
        disabled={!!activeCycle}
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
        disabled={!!activeCycle}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </HomeFormContainer>
  )
}
