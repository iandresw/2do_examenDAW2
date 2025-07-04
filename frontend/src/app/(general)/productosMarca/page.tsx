/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useEffect, useState } from 'react'
import { productosMarca } from '../services/api'
import { Bar } from 'react-chartjs-2'
import { Chart as CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
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

   
  useEffect(()=>{
    productosMarca().then(data=>{
      const dataLabes = data.map((item:any)=>item.brand)
      const catidad = data.map((item: any) => parseInt(item.cantidad_marca))
      setCharData(
        {
          labels: dataLabes,
          datasets: [
            {
              label: 'Productos por Marca',
              data: catidad,
              backgroundColor: "",
              borderColor: ''
            }
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