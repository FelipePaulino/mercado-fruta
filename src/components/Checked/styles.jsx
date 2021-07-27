import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'

export const Background = styled.section`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
    width: 600px;
    height: 250px;
    box-shadow:  0 5px 16px rgba(0,0,0,.2);
    background: white;
    color: ${props => props.theme.text};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    z-index: 10;
    border-radius: 10px;
    position: relative;

    @media screen and (max-width: 768px) {
        width: 400px;
        padding: 20px;
        text-align: center;
    }
`

export const CloseChecked = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
    transition: all .3s ease-out;

    :hover{
        transform: rotate(360deg);
    }
`

export const CheckItem = styled(AiFillCheckCircle)`
    font-size: 2em;
    color: green;
`