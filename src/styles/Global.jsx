import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        text-decoration: none;
        border: none;
        outline: none;
        box-sizing: border-box;
    }

    body {
        font-family: sans-serif;
        background-color: ${props => props.theme.body};
    }
`

export default GlobalStyle

export const Container = styled.div`
    max-width: 1140px;
    width: 100%;
    padding: 0 2%;
    margin: 0 auto;
`