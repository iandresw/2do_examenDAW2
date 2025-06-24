'use client'
import React, { useEffect, useState } from 'react'
import { promedioProductos } from '../services/api'
import { error } from 'console'
import { Bar } from 'react-chartjs-2'

export default function page() {
  const [charData, setCharData ] = useState({
 
    labels: [],
    datasets: [
      {
        label: 'Dataset',
        data: [],
        borderColor: '',
        backgroundColor: '',
      }
    ]

  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    promedioProductos().then(data=>{
      const dataLabes = data.map((item:any)=>item.brand)
      const catidad = data.map((item:any)=parseInt(>item.cantidad_marca))
      setCharData(
        {
          labels:dataLabes,
          datasets:[
            label:'Productos por Marca',
            data:catidad
          ]
        }
      )
    }).catch((erro)=>console.error("ocurrio un error" + erro))
  },[])
  return (
    <div><Bar data={charData}>
      </Bar></div>
  )
}