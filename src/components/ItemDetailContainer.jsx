import ItemDetail from "./ItemDetail.jsx"
import customFetch from "../data/customFetch.js"
import dataProducts from "../data/dataProducts.js"
import '../css/ItemDetail.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{
    const [data,setData] = useState({})
    const {idItem} = useParams()

    useEffect(()=>{
        customFetch(2000, dataProducts.find(item => item.id == idItem))
        .then(data => setData(data)) //Para ver los diferentes productos, cambia el numero
        .catch(err => console.log(err))
    }, [])

    return(
        <ItemDetail item={data}/>
    )
}

export default ItemDetailContainer