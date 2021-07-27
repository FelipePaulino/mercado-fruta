import Head from 'next/head'
import Products from '../src/components/Products'
import Search from '../src/components/Search'
import { product_card } from '../src/components/Products/data'
import axios from "axios";
import { useEffect, useState } from 'react'
import { Container } from '../src/styles/Global';
import styled from 'styled-components'

export default function Home({isLogged}) {
  const [data, setData] = useState()
  const [search, setSearch] = useState()
  const [result, setResult] = useState();

  const url = "https://mercadofruta-6090b-default-rtdb.firebaseio.com/frutas/list.json"

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data, 'data')

      const filterProducts = res.data.filter(n =>{
        return n !== null 
      })
      setData(filterProducts);
    });
  }, []);


  let urlParams;
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    params.forEach((value, key) => {
      urlParams = Object.assign({}, urlParams, {
        [key]: value.toString()
      });
    });
  }

  useEffect(() => {
    const filtered = data?.filter(item => {
        if (item?.name?.indexOf(urlParams?.fruta) !== -1) {
          return item;
        }
      
    })
    setResult(filtered)
  }, [data]);

  const Title = styled.h1``

  return (
    <>
      <Head>
        <title>Mercado Fruta | Página Inicial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search data={product_card} setSearch={setSearch} search={search} />

      <Container>
       {result?.length > 0 ? (<Title>Resultados para {urlParams?.fruta}</Title>) : (<>não há reultados</>)} 
      </Container>

      <Products result={result} isLogged={isLogged} />
    </>
  )
}
