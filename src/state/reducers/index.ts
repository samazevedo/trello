import { Action } from '../actions'
import { ActionType } from '../action_types'
import { nanoid } from 'nanoid'
import { findItemIndexById } from '../../utils/arrayUtils'

export type Task = {
    id: string
    text: string
}
export type List = {
    id: string
    text: string
    tasks: Task[]
}
export type AppState = {
    lists: List[]
}

export const reducer = (draft: AppState, action: Action): AppState | void => {
    switch (action.type) {
        case ActionType.ADD_LIST: {
            draft.lists.push({
                id: nanoid(),
                text: action.payload,
                tasks: [],
            })
            break
        }
        case ActionType.ADD_TASK: {
            const { text, listId } = action.payload
            const targetListIndex = findItemIndexById(draft.lists, listId)

            draft.lists[targetListIndex].tasks.push({
                id: nanoid(),
                text,
            })
            break
        }
    }
}
