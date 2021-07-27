import React, { useState, useEffect } from 'react'
import Car from '../src/components/Car'
import GoBack from '../src/components/Back'
import axios from  'axios'

export default function listProducts() {
    const [data, setData] = useState()

    const url = "https://mercadofruta-6090b-default-rtdb.firebaseio.com/frutas/checkout.json"
    
    useEffect(() => {
        axios.get(url).then((res) => {
          setData(Object.entries(res.data));
        });
      }, []);

    return (
        <>
            <Car data={data} />
            <GoBack />
        </>
    )
}
