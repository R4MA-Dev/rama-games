import ItemDetail from "./ItemDetail.jsx"
import '../css/ItemDetail.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../data/firebaseFetch.js"

const ItemDetailContainer = ()=>{
    const [data, setData] = useState({})
    const {idItem} = useParams()

    useEffect(()=>{
        getProduct(idItem)
        .then(data => setData(data))
        .catch(err => console.log(err))
    }, [idItem])

    return(
        <ItemDetail item={data}/>
    )
}

export default ItemDetailContainer