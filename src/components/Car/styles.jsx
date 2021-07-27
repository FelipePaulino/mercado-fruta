import styled from 'styled-components'

export const Details = styled.main`
    padding: 40px 0;
`

export const Grid = styled.div`
    justify-content: space-between;
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const Wrapper = styled.div`
    margin-right: 2%;
    width: 100%;
`

export const Aside = styled.aside`
    background-color: white;
    width: 50%;
    height: 100%;
    padding: 20px;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const Content = styled.section`
    background-color: white;
    padding: 20px 0;
    border-radius: 10px;
    display: flex;
    box-shadow: 5px 5px 15px rgba(0,0,0, .1);
    margin-bottom: 20px;
    position: relative;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 100%;
    }
`

export const Product = styled.div`
    border-right: 1px solid rgba(0,0,0,.1);
    padding-right: 20px;
    display: flex;
    align-items: center;
    height: 100%;

    img{
        width: 250px;
        height: 200px;
        border-radius: 10px;
    }

    @media screen and (max-width: 768px) {
        border-bottom: 1px solid rgba(0,0,0,.1);

        img{
            width: 100%;
        }
    }
`
export const Detail = styled.div`
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    button:hover{
        background-color: ${props => props.theme.hoverPrimary}
    }

    @media screen and (max-width: 768px) {
        padding-top: 40px;
    }
`

export const Heading = styled.div`
    margin-bottom: 10px;

    h2{
        text-transform: capitalize;
        font-weight: bold;
        color: ${props => props.theme.secondary};
        margin-bottom: 10px;
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    position: absolute;
    bottom: 10px;
    right: 10px;
    
    button {
        cursor: pointer;
        margin: 20px 0;
        font-size: 1em;
        border-radius: 5px;
        background-color: ${props => props.theme.primary};
        color: white;
        padding: 5px 10px;
        transition: all .3s ease-out;
    }

    @media screen and (max-width: 768px) {
        position: relative;
    }
`

export const ListProducts = styled.ul`
    margin: 10px 0;

    li{
        color: #9e9e9e;
        font-size: .8em;
    }

    sup {
        font-size: .5em;
    }
`

export const Total = styled.sup`
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    
    h3{
        text-transform: uppercase;
        font-size: 1em;
        font-weight: bold;
        letter-spacing: 1px;
    }

    span{
        font-weight: bolder;
    }
`

export const Finish = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    div > a{
        background-color: ${props => props.theme.primary};
        padding: 10px 25px;
        border-radius: 5px;
        color: white;
        transition: all .3s ease;

        :hover{
            background-color: ${props => props.theme.hoverPrimary};
            color: white;
        }
    }
`

export const Items = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Price = styled.span`
    position: absolute;
    bottom: 40px;
    color: #9e9e9e;
    font-size: 2em;
    font-weight: bolder;

    sup{
        font-weight: bold;
    }

    @media screen and (max-width: 768px) {
        margin-top: 40px;
        position: relative;
    }
`