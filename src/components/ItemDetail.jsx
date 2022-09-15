import { CartContext } from "../context/CartContext.jsx"
import { useContext } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "./ItemCount.jsx"

const ItemDetail = ({item})=>{
    const [itemCount, setItemCount] = useState(0)
    const context = useContext(CartContext)

    const alertAdd = (number)=>{
        if(item.quantity === item.stock){
            alert("Has agotado el stock disponible")
        }else{
            alert(`Ha añadido ${number} elementos al carrito`)
            setItemCount(number)
            context.addItem(item, number)
        }
    }

    return(
        <div id="item-detail-container">
            <img id="item-img" src={item.img} alt="Imagen Juego" />
            <div id="item-details">
                <div>
                    <h1 id="h1-title">{item.name}</h1>
                    <p id="p-stock">En stock: <span>{item.stock}</span></p>
                </div>
                
                <p id="p-description">{item.description}</p>
                <p id="p-plataform">Plataforma: {item.plataform}</p>

                <div id="buy-box">
                    <p id="p-price">Precio: <span>{item.price} AR$</span></p>
                    {   
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={alertAdd} />
                        : <Link to="/cart"><button id="btn-checkout">Checkout</button></Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail