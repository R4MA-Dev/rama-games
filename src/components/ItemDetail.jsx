import { CartContext } from "../context/CartContext.jsx"
import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import Aos from "aos"
import 'aos/dist/aos.css'
import ItemCount from "./ItemCount.jsx"
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({item})=>{
    const [itemCount, setItemCount] = useState(0)
    const context = useContext(CartContext)

    const alertAdd = (number)=>{
        setItemCount(number)
        context.addItem(item, number)
    }

    useEffect(()=>{
        Aos.init({duration: 500})
    }, [])

    return(
        <>
        <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <div id="item-detail-container" data-aos="fade-up">
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
        </>
    )
}

export default ItemDetail