import styled from 'styled-components'

export const Content = styled.div`
    position: relative;
    z-index: 1;
`

export const Img = styled.img`
    width: 100%;
    height: 400px;
`
export const ArrowNext = styled.button`
    cursor: pointer;
    color: ${props => props.theme.primary};
    position: absolute;
    background-color: transparent;
    font-size: 2em;
    top: 50%;
    right: -5%;

    @media screen and (max-width: 768px) {
        right:0;
    }
`
export const ArrowPrev = styled.button`
    cursor: pointer;
    color: ${props => props.theme.primary};
    position: absolute;
    font-size: 2em;
    background-color: transparent;
    top: 50%;
    left: -5%;

    @media screen and (max-width: 768px) {
        left:0;
        z-index: 999;
    }
`