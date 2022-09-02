import { Action } from '../actions'
import { ActionType } from '../action_types'

export const addTask = (text: string, listId: string): Action => ({
    type: ActionType.ADD_TASK,
    payload: {
        text,
        listId,
    },
})
export const addList = (text: string): Action => ({
    type: ActionType.ADD_LIST,
    payload: text,
})
