import styled from 'styled-components'
import { TiArrowBack } from 'react-icons/ti'

const Content = styled.a`
    position: fixed;
    right: 10px;
    bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
    border-radius: 50%;
    background-color: ${props => props.theme.primary};
    font-size: 2em;
`

const GoBack = styled(TiArrowBack)`
    color: white;
`

export default function Back() {
    return (
        <Content href="../">
            <GoBack />
        </Content>
    )
}
