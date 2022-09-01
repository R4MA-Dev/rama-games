import { useState, useEffect } from "react";
import customFetch from "../data/customFetch.js";
import dataProducts from "../data/dataProducts.js"
import Item from "./Item.jsx";

const ItemList = ()=>{
    const [data, setData] = useState([])

    useEffect(()=>{
        customFetch(2000, dataProducts)
        .then(datos => setData(dataProducts))
        .catch(err => console.log(err))
    }, [])

    return(
        <section id="products">
            {
                data.length ?
                data.map(item => (
                    <Item 
                        key = {item.id}
                        img = {item.img}
                        name = {item.name}
                        price = {item.price}
                        plataform = {item.plataform}
                    />
                ))
                : <h2 id="h2-loading">Cargando Productos...</h2>
            }
        </section>
    )
}

export default ItemList