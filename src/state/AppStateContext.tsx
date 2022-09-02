import { createContext, useContext, Dispatch } from 'react'
import { AppState, appStateReducer, List, Task } from './reducers'
import { Action } from './actions'
import { useImmerReducer } from 'use-immer'

const appData: AppState = {
    lists: [
        {
            id: '0',
            text: 'To Do',
            tasks: [{ id: 'c0', text: 'To do ' }],
        },
        {
            id: '1',
            text: 'In Progress',
            tasks: [{ id: 'c0', text: 'Learn Typescript' }],
        },
        {
            id: '2',
            text: 'Done',
            tasks: [{ id: 'c0', text: 'Use static typing' }],
        },
    ],
}

type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id: string): Task[]
    dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)

// DEFINE CONTEXT PROVIDER
interface AppStateProviderProps {
    children: React.ReactNode
}
export const AppStateProvider = ({ children }: AppStateProviderProps) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const { lists } = state

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}

// CUSTOM HOOK
export const useAppState = () => {
    return useContext(AppStateContext)
}
