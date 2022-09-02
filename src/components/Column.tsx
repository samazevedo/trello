import { ColumnContainer, ColumnTitle } from '../styles'
import { Card } from './Card'
import { useAppState } from '../state/AppStateContext'
import { AddNewItem } from './AddNewItem'
import { addTask } from '../state/action-creators'

type ColumnProps = {
    text: string
    id: string
}

export const Column = ({ text, id }: ColumnProps) => {
    const { getTasksByListId, dispatch } = useAppState()
    const tasks = getTasksByListId(id)
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {tasks.map((task) => {
                const { id, text } = task
                return <Card text={text} key={id} id={id} />
            })}
            <AddNewItem
                toggleButtonText='+ Add another card'
                onAdd={(text) => dispatch(addTask(text, id))}
                dark
            />
        </ColumnContainer>
    )
}
