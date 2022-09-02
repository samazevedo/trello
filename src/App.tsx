import { AppContainer } from './styles'
import { Column } from './components/Column'
import { AddNewItem } from './components/AddNewItem'

export const App = () => {
    return (
        <AppContainer>
            <Column text='todo' />
            <AddNewItem
                onAdd={(text) => console.log(text)}
                toggleButtonText='+ Add another card'
                dark
            />
        </AppContainer>
    )
}
