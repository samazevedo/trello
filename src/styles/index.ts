import styled from 'styled-components'

export const AppContainer = styled.main`
    width: 100%;
    height: 100%;
    background-color: #5997ce;
    padding: 0.7rem 0.7rem 0 0.7rem;
    display: grid;
    grid-template-columns: 1.5fr 0.5fr;
    align-items: center;
    align-items: flex-start;
`
export const ContainerWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`
export const ColumnContainer = styled.section`
    background-color: #ebecf0;
    max-width: 15rem;
    min-height: 8rem;
    margin-right: 0.5rem;
    margin: 0 0.5rem 0.5rem 0;
    border-radius: 0.2rem;
    padding: 0.8rem 0.8rem;
    overflow: hidden;
`

export const ColumnTitle = styled.h2`
    text-align: start;
    text-transform: capitalize;
    margin: 0;
    font-size: 1rem;
    padding: 0 1rem 0.5rem 0;
`

export const CardContainer = styled.section`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.3rem 0.5rem;
    border-radius: 0.2rem;
    box-shadow: #091e4240 0px 1px 0px 0px;
`
type AddItemButtonProps = {
    dark?: boolean
}

export const AddItemButton = styled.button<AddItemButtonProps>`
    background-color: #ffffff3d;
    border-radius: 0.2rem;
    border: none;
    color: ${(props) => (props.dark ? '#000000' : '#ffffff')};
    cursor: pointer;
    max-width: 14rem;
    font-size: 0.9rem;
    padding: 0.5rem;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;
    &:hover {
        background-color: #ffffff52;
    }
`
export const NewItemFormContainer = styled.section`
    max-width: 15rem;
    width: 100%;
    align-items: flex-start;
`
export const NewItemButton = styled.button`
    background-color: #5aac44;
    border-radius: 0.2rem;
    border: none;
    box-shadow: none;
    color: #ffffff;
    padding: 0.3rem;
    cursor: pointer;
    text-align: center;
`
export const NewItemInput = styled.input`
    border-radius: 0.2rem;
    border: none;
    box-shadow: 0 1px 0 0 #091e4e40;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    padding: 0.3rem;
    width: 100%;
`
