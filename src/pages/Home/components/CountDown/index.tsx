import { differenceInSeconds } from 'date-fns'
import { useEffect } from 'react'
import { useCycle } from '../../../../context/useCycle'
import { HomeCountDownContainer, HomeSeparator } from './styles'

export function CountDown() {
  const {
    activeCycle,
    amountSecondsPassed,
    marCurrentCycleAsFinished,
    setSecondsPassed,
  } = useCycle()

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = minutesAmount.toString().padStart(2, '0')
  const seconds = secondsAmount.toString().padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDiff = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDiff >= totalSeconds) {
          marCurrentCycleAsFinished()

          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDiff)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, marCurrentCycleAsFinished, setSecondsPassed, totalSeconds])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`
    }
  }, [activeCycle, minutes, seconds])
  return (
    <HomeCountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <HomeSeparator>:</HomeSeparator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </HomeCountDownContainer>
  )
}
