import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item.jsx";
import {getData} from '../data/firebaseFetch.js'

const ItemList = ()=>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams();

    useEffect(() =>{
        getData(idCategory)
        .then(data => {
            setData(data)
            setLoading(false)})
        .catch(err => console.log(err))
    }, [idCategory])


    return(
        <section id="products">
            {
                loading === false ?
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
                :<div className="content-spinner">
                    <div className="spinner"></div>
                </div>
            }
        </section>
    )
}

export default ItemList