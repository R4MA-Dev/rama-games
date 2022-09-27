import ItemDetail from "./ItemDetail.jsx"
import '../css/ItemDetail.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../data/firebaseFetch.js"

const ItemDetailContainer = ()=>{
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const {idItem} = useParams()

    useEffect(()=>{
        getProduct(idItem)
        .then(data => {
            setData(data)
            setLoading(false)})
        .catch(err => console.log(err))
    }, [idItem])

    return(
        loading === false 
        ? <ItemDetail item={data}/>
        :<div className="content-spinner">
            <div className="spinner"></div>
        </div>
    )
}

export default ItemDetailContainer