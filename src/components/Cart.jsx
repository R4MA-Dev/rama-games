import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
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
                    ?   <>
                        <h1 style={{color: "white"}}>El carrito esta vacio</h1>
                        <Link to="/"><button id="btn-volver">Ir a los productos</button></Link>
                        </>
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

                                    <div className="item-detail-box">
                                        <p style={{marginLeft : "5px"}}>Juego:&nbsp;</p>
                                        <p>{item.name}</p>
                                    </div>

                                    <div className="item-detail-box">
                                        <p style={{marginLeft : "5px"}}>Precio:&nbsp;</p>
                                        <p>{item.price}AR$</p>
                                    </div>

                                    <div className="item-detail-box">
                                        <p style={{marginLeft : "5px"}}>Cantidad:&nbsp;</p>
                                        <p>{item.quantity}</p>
                                    </div>

                                    <div className="item-detail-box">
                                        <p style={{marginLeft : "5px"}}>Total:&nbsp;</p>
                                        <p>{item.price * item.quantity}AR$</p>
                                    </div>

                                    <button className="btn-delete" 
                                    onClick={()=> context.removeItem(item.id)}>Borrar</button>
                                </div>
                            </>
                            }
                        </li>)
                }
            </ul>
            {
                context.cartList.length === 0
                ? <></>

                :   <div id="checkout-container">
                    <p>Total de productos: {context.qtyProducts()}</p>
                    <p>Total: {context.calcAll()}AR$</p>
                    <button id="btn-checkout" className="btn-buy">Pasar al pago</button>
                    </div>
            }
        </section>
        
    )
}

export default Cart