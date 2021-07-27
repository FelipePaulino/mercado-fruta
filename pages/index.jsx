import Head from 'next/head'
import Products from '../src/components/Products'
import Search from '../src/components/Search'
import Slider from '../src/components/Slider'
import axios from "axios";
import { useState,useEffect } from 'react'

export default function Home({isLogged}) {
  const [search, setSearch] = useState()
  const [result, setResult] = useState()

  const url = "https://mercadofruta-6090b-default-rtdb.firebaseio.com/frutas/list.json"

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data, 'data')

      const filterProducts = res.data.filter(item =>{
        return item !== null 
      })
      setResult(filterProducts);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Mercado Fruta | Página Inicial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search setSearch={setSearch} search={search}  />

      <Slider />

      <Products result={result} isLogged={isLogged} />
    </>
  )
}
