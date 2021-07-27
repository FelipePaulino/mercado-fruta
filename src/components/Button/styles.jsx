import styled from 'styled-components'

export const Content = styled.button`
    cursor: pointer;
    display: flex;
    margin: 20px auto;
    font-size: 1em;
    border-radius: 5px;
    background-color: ${props => props.theme.primary};
    color: white;
    width: 80%;
    padding: 10px 0;
    justify-content: center;
    transition: all .3s ease-out;

    :hover{
        background-color: ${props => props.theme.hoverPrimary};
    }

    :disabled {
        color: ${props => props.theme.text};
        background-color: ${props => props.theme.hoverPrimary};
    }
`