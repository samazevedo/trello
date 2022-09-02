import { ActionType } from '../action_types'

interface AddListAction {
    type: ActionType.ADD_LIST
    payload: string
}
interface AddTaskAction {
    type: ActionType.ADD_TASK
    payload: {
        text: string
        listId: string
    }
}
export type Action = AddListAction | AddTaskAction
