import { CartContext } from "../context/CartContext.jsx"
import { useContext } from "react"
import { ToastContainer } from 'react-toastify';
import ItemCount from "./ItemCount.jsx"
import Footer from "./Footer.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../context/UserContext.jsx";


const ItemDetail = ({item})=>{
    const { addItem } = useContext(CartContext)
    const { session } = useContext(UserContext)

    const alertAdd = (number)=>{
        addItem(item, number)
    }

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
        theme="colored"
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
                    {
                        session === false
                        ?
                        <p style={{color : "red", fontSize: "20px"}}>Debes iniciar sesion para añadir al carrito</p>
                        :
                        <>                    
                        <p id="p-price">Precio: <span>{item.price} AR$</span></p>
                        <ItemCount stock={item.stock} initial={0} onAdd={alertAdd} />
                        </>
                    }
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default ItemDetail