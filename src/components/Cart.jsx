import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import { doc, setDoc, updateDoc, serverTimestamp, collection, increment } from "firebase/firestore"
import { db } from "../data/firebaseConfig"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/Cart.css'

const Cart = ()=>{
    const { calcAll, clear, removeItem, cartList, qtyProducts } = useContext(CartContext)

    const itemsForDB = cartList.map(item => ({
        id : item.id,
        name : item.name,
        price : item.price,
        quantity : item.quantity
    }))

    const createOrder = async ()=>{
        let order = {
            buyer : {
                name : "Ramiro Mercado",
                email : "rama@gmail.com",
                phone : "2614671464",
                date : serverTimestamp()
            },
            items : itemsForDB,
            total : calcAll()
        }

        const orderId = doc(collection(db, "orders"))
        await setDoc(orderId, order)

        cartList.map(async (item) => {
            const itemRef = doc(db, "products", item.id)
            await updateDoc(itemRef, {
                stock : increment(-item.quantity)
            })
        })

        clear()
        toast.success(`Su orden ha sido creada. \n
        ID de Orden: ${orderId.id}`)
    }

    return (
        <>
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
        <section>
            {
            
            }
            <div id="btn-container">
                {
                    cartList.length === 0
                    ?   <>
                        <h1 style={{color: "white"}}>El carrito esta vacio</h1>
                        <Link to="/"><button id="btn-volver">Ir a los productos</button></Link>
                        </>
                    : <button id="btn-deleteAll" onClick={clear}>Borrar Todo</button>
                }
            </div>
            <ul className="cart-list">
                {
                    cartList.map(item => 
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
                                    onClick={()=> removeItem(item.id)}>Borrar</button>
                                </div>
                            </>
                            }
                        </li>)
                }
            </ul>
            {
                cartList.length === 0
                ? <></>

                :   <div id="checkout-container">
                    <p>Total de productos: {qtyProducts()}</p>
                    <p>Total a pagar: {calcAll()}AR$</p>
                    <button id="btn-checkout" className="btn-buy" onClick={createOrder}>Pasar al pago</button>
                    </div>
            }
        </section>
        </>
    )
}

export default Cart