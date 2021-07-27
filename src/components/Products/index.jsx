import { useState } from 'react'
import * as S from './styles'
import { Container } from '../../styles/Global'
import Checked from '../Checked'
import axios from 'axios'
import Button from '../Button'

export default function Products({ result, isLogged }) {
    const [check, setCheck] = useState(false)

    const openChecked = () => {
        setCheck(prev => !prev)
    }

    console.log(isLogged, 'isLogged')

    const url = "https://mercadofruta-6090b-default-rtdb.firebaseio.com/frutas/checkout.json"

    const addCheckout = (data) =>{
        axios.post(url, data).then((res) => {
            openChecked()
        })
    };

    return (
        <S.Content>
            <Container>
                <S.Grid>
                    {result?.map((item) => {
                        return (
                            <S.Box key={item.name}>
                                <img src={item.image} />
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>

                                <S.Pricing>
                                    <sup>R$</sup><span>{item.price}</span>
                                </S.Pricing>
                                {isLogged ? (
                                    <Button
                                        onClick={() => {
                                            addCheckout(item)
                                        }}
                                        label="Adicionar ao Carrinho"
                                    />
                                ) : (
                                    <Button
                                        label="Logue para comprar"
                                        disabled
                                    />
                                )}
                            </S.Box>
                        )
                    })}

                </S.Grid>
                <Checked check={check} setCheck={setCheck} />
            </Container>
        </S.Content>
    )
}
