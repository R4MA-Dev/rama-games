import ItemDetail from "./ItemDetail.jsx"
import customFetch from "../data/customFetch.js"
import dataProducts from "../data/dataProducts.js"
import '../css/ItemDetail.css'
import { useEffect, useState } from "react"

const ItemDetailContainer = ()=>{
    const [data,setData] = useState({})
    useEffect(()=>{
        customFetch(2000, dataProducts)
        .then(data => setData(data[0])) //Para ver los diferentes productos, cambia el numero
        .catch(err => console.log(err))
    }, [])

    return(
        <ItemDetail item={data}/>
    )
}

export default ItemDetailContainer