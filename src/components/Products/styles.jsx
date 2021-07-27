import styled from 'styled-components'

export const Content = styled.div`
    margin: 4% auto;
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0 20px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
`

export const Box = styled.div`
    margin: 20px 0;
    text-align: center;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 15px rgba(0,0,0, .1);
    transition: all .3s ease-out;

    img{
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
    }

    p{
        margin: 10px 0;
    }

    :hover{
        transition: all .3s ease-out;
        transform: scale(1.05);
    }
`

export const Pricing = styled.div`
    margin-bottom: 10px;
    font-size: 2em;
    font-weight: bold;

    sup{
        font-size: .5em;
    }
`

