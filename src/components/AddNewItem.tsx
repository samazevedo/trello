import { useState } from 'react'
import { AddItemButton } from '../styles'
import { NewItemForm } from './NewItemForm'

type AddNewItemProps = {
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = ({
    dark,
    toggleButtonText,
    onAdd,
}: AddNewItemProps) => {
    const [showform, setShowForm] = useState<boolean>(false)

    if (showform) {
        return (
            <NewItemForm
                onAdd={(text) => {
                    onAdd(text)
                    setShowForm(false)
                }}
            />
        )
    }

    return (
        <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )
}
