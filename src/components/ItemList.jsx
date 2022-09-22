import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item.jsx";
import {getData, getDataFiltered} from '../data/firebaseFetch.js'

const ItemList = ()=>{
    const [data, setData] = useState([]);
    const {idCategory} = useParams();

    useEffect(() =>{
        if(idCategory){
            getDataFiltered(idCategory)
            .then(data => setData(data))
            .catch(err => console.log(err))
        }else{
            getData()
            .then(data => setData(data))
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