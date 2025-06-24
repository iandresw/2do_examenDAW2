import axios from "axios";

const urlApi="http://localhost:4000"

export const productosMarca = async ()=>{
    const respuesta = await axios.get(`${urlApi}/productos-marca`)
    return respuesta
}

export const promedioProductos = async ()=>{
    const respuesta = await axios.get(`${urlApi}/promedio-productos-categoria`)
    return respuesta
}