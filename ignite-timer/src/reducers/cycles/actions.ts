import { Cycle } from '../../context/useCycles'

export enum ActionTypes {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARKK_CURRENT_CYCLE_AS_FINISHED = 'MARKK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleActionAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function interruptNewCycleAction() {
  return {
    type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionTypes.MARKK_CURRENT_CYCLE_AS_FINISHED,
  }
}
