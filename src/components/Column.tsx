import { ColumnContainer, ColumnTitle } from '../styles'
import { Card } from './Card'
import { useAppState } from '../state/AppStateContext'
import { AddNewItem } from './AddNewItem'
type ColumnProps = {
    text: string
    id: string
}

export const Column = ({ text, id }: ColumnProps) => {
    const { getTasksByListId } = useAppState()
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
                onAdd={console.log}
                dark
            />
        </ColumnContainer>
    )
}
