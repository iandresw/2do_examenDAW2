'use client'
import React, { useEffect, useState } from 'react'
import { promedioProductos } from '../services/api'
import { error } from 'console'

export default function page() {
  const [charData, setCharData ] = useState({
 
    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
    datasets: [
      {
        label: 'Dataset',
        data: Utils.numbers({count: 6, min: -100, max: 100}),
        borderColor: '',
        backgroundColor: '',
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15
      }
    ]

  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    promedioProductos().then(data=>{
      const datalabels = data.map(items)
    }).catch((erro)=>console.error("ocurrio un error" + erro))
  },[])
  return (
    <div>page</div>
  )
}
