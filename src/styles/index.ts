import styled from 'styled-components'

export const AppContainer = styled.main`
    width: 100%;
    height: 100%;
    background-color: #3179ba;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
`

export const ColumnContainer = styled.section`
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); */
    background-color: #ebecf0;
    width: 300px;
    min-height: 40px;
    margin-right: 20px;
    border-radius: 0.2rem;
    padding: 0.8rem 0.8rem;
`

export const ColumnTitle = styled.h2`
    text-align: start;
    text-transform: capitalize;
    margin: 0;
    font-size: 1.3rem;
    padding: 0 1rem 0.5rem 0;
`

export const CardContainer = styled.section`
    background-color: #fff;
    cursor: pointer;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    max-width: 300px;
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
    max-width: 300px;
    font-size: 1rem;
    padding: 0.4rem;
    text-align: left;
    transition: background 85ms ease-in;
    width: 100%;
    &:hover {
        background-color: #ffffff52;
    }
`
export const NewItemFormContainer = styled.section`
    max-width: 300px;
    width: 100%;
    align-items: flex-start;
`
export const NewItemButton = styled.button`
    background-color: #5aac44;
    border-radius: 0.2rem;
    border: none;
    box-shadow: none;
    color: #ffffff;
    padding: 0.33rem;
    cursor: pointer;
    text-align: center;
`
export const NewItemInput = styled.input`
    border-radius: 0.2rem;
    border: none;
    box-shadow: 0 1px 0 0 #091e4e40;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    padding: 0.4rem;
    width: 100%;
`
