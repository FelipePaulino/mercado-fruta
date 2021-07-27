import styled from "styled-components";

export const Content = styled.header`
    background-color: ${props => props.theme.primary};
    padding: 1% 0;
    position: relative;
    z-index: 9;
`

export const Grid = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Brand = styled.div``

export const Nav = styled.nav`
    ul {
        display: flex;
    }

    li {
        margin: 0 20px;
    }

    a{
        color: white;
    }

    a:hover{
        color: ${props => props.theme.hoverPrimary};
    }

    @media screen and (max-width: 768px) {
        li{
            margin: 20px;
        }
    }
`

export const Icons = styled.div`
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button,a{
        cursor: pointer;
        color: white;
        font-size: 2em;
        background-color: transparent;
    }

    @media screen and (max-width: 768px) {
        width: 20%;
    }
`