import { AppContainer, ContainerWrapper } from './styles'
import { Column } from './components/Column'
import { AddNewItem } from './components/AddNewItem'
import { useAppState } from './state/AppStateContext'
import { addList } from './state/action-creators'

export const App = () => {
    const { lists, dispatch } = useAppState()

    return (
        <AppContainer>
            <ContainerWrapper>
                {lists.map((list) => {
                    const { id, text } = list
                    return <Column key={id} text={text} id={id} />
                })}
            </ContainerWrapper>
            <AddNewItem
                onAdd={(text) => dispatch(addList(text))}
                toggleButtonText='+ Add another card'
                dark
            />
        </AppContainer>
    )
}
