import { createContext, useContext } from 'react'

type Task = {
    id: string
    text: string
}
type List = {
    id: string
    text: string
    tasks: Task[]
}
export type AppState = {
    lists: List[]
}

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
}

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
)

// DEFINE CONTEXT PROVIDER
interface AppStateProviderProps {
    children: React.ReactNode
}
export const AppStateProvider = ({ children }: AppStateProviderProps) => {
    const { lists } = appData

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId }}>
            {children}
        </AppStateContext.Provider>
    )
}
