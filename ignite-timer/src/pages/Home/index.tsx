/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from 'phosphor-react';
import { FormProvider, useForm } from 'react-hook-form';
import * as zod from "zod";
import { useCycle } from "../../context/useCycles";
import { CountDown } from "./components/CountDown";
import { NewCycleForm } from "./components/NewCycleForm";
import * as styles from './styles';


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1, 'O tempo mínimo é de 1 minuto').max(99, "O tempo máximo é 99 minutos"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>



export function Home() {
  const {activeCycle,createNewCycle, interruptCurrentCycle} = useCycle()

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  })

  const {  reset, watch, handleSubmit } = newCycleForm

  const task = watch('task')
  const isDisabledSubmit = !task

  function handleCreateNewCycle (data: NewCycleFormData){
    createNewCycle(data)
    reset()
  }

  function handleInterruptCycle (){
    interruptCurrentCycle()
  }


  return (
    <styles.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>

        
          <FormProvider {...newCycleForm}>
            <NewCycleForm />
          </FormProvider>
          <CountDown />

        {
          activeCycle ? (
            <styles.StopCountDownButton type="button" onClick={handleInterruptCycle}>
              <HandPalm size={24} />
              Começar
            </styles.StopCountDownButton>
          ) : (
            <styles.StartCountDownButton type="submit" disabled={isDisabledSubmit}>
              <Play size={24} />
              Começar
            </styles.StartCountDownButton>
          )
        }
      </form>
    </styles.HomeContainer>
  )
}

