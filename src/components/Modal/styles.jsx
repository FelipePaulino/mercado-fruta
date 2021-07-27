import styled from "styled-components";

export const Login = styled.div`
    background-color: white;
    width: 250px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: fixed;
    right: -10%;
    z-index: 10;
    box-shadow: 5px 5px 10px rgba(0,0,0, .1);
`

export const Heading = styled.form`
    div{
        margin-bottom: 5px;
    }

    label{
        padding-left: 10px;
        font-size: .7em;
        font-weight: bold;
        color: ${props => props.theme.primary};
    }

    input{
        width: 100%;
        padding: 5px 10px;
        border: 2px solid ${props => props.theme.primary};
    }
    input:hover{
        border-color: ${props => props.theme.secondary};
    }
    input:focus{
        border-color: ${props => props.theme.secondary};
    }

    button{
        cursor: pointer;
        display: flex;
        margin: 20px auto;
        font-size: 1em;
        border-radius: 5px;
        background-color: ${props => props.theme.primary};
        color: white;
        width: 50%;
        padding: 10px 0;
        justify-content: center;
        transition: all .3s ease-out;
    }

    button:hover{
        background-color: ${props => props.theme.hoverPrimary};
    }
`

export const Footer = styled.div`
    margin-top: 10px;
    background-color: ${props => props.theme.primary};
    border-radius: 5px;

    button{
        cursor: pointer;
        font-size: 1em;
        display: flex;
        margin: 0 auto;
        width: 100%;
        padding: 10px 0;
        justify-content: center;
    }
`

export const Logged = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;

    h3{
        color: ${props => props.theme.primary};
    }
`

export const Loggouf = styled.div`
    padding-top: 10px;

    h3{
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: ${props => props.theme.primary};
    }
`