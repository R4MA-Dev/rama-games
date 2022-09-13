import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../data/customFetch.js";
import dataProducts from "../data/dataProducts.js"
import Item from "./Item.jsx";

const ItemList = ()=>{
    const [data, setData] = useState([]);
    const {idCategory} = useParams();

    useEffect(()=>{
        if(idCategory){
            customFetch(2000, dataProducts.filter(item => item.idCategory === parseInt(idCategory)))
            .then(datos => setData(datos))
            .catch(err => console.log(err))
        }else{
            customFetch(2000, dataProducts)
            .then(datos => setData(datos))
            .catch(err => console.log(err))
        }
    }, [idCategory])

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
                        id = {item.id}
                    />
                ))
                : <h2 id="h2-loading">Cargando Productos...</h2>
            }
        </section>
    )
}

export default ItemList