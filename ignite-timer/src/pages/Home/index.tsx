/* eslint-disable prettier/prettier */
import { zodResolver } from "@hookform/resolvers/zod";
import { Play } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import * as zod from "zod";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer, InputMinutesAmount, InputTask, Separator, StartCountDownButton
} from './styles';


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1, 'O tempo mínimo é de 1 minuto').max(99, "O tempo máximo é 99 minutos"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


export function Home() {
  // const [task, settask] = useState('')

  const { register,  reset, watch, handleSubmit } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const task = watch('task')
  const isDisabledSubmit = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
    reset()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask
            type="text"
            id="task"
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
            {...register('minutesAmount', { valueAsNumber: true })}
            placeholder="00"
            min={1}
            max={99}
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

        <StartCountDownButton type="submit" disabled={isDisabledSubmit}>
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}

