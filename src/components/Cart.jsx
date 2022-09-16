import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import '../css/Cart.css'

const Cart = ()=>{
    const context = useContext(CartContext)

    return (
        <section>
            {
            
            }
            <div id="btn-container">
                {
                    context.cartList.length === 0
                    ? <h1 style={{color: "white"}}>El carrito esta vacio</h1>
                    : <button id="btn-deleteAll" onClick={context.clear}>Borrar Todo</button>
                }
            </div>
            <ul className="cart-list">
                {
                    context.cartList.map(item => 
                        <li key={item.id}>
                            {   
                            <>  
                                <div className="item-cart-details">
                                <img src={item.img} alt="Imagen Juego" />
                                <p>Juego: {item.name}</p>
                                <p>Precio: {item.price}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Total: {item.price * item.quantity}</p>
                                <button className="btn-delete" onClick={()=> context.removeItem(item.id)}>Borrar</button>
                                </div>
                            </>
                            }
                        </li>)
                }
            </ul>
        </section>
        
    )
}

export default Cart