import logoCart from "../img/shopping-cart.png"
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

export const CartWidget = ()=>{
    const {qtyProducts, cartList} = useContext(CartContext)

    return(
        <span className="carrito">
        <img src={logoCart} alt="Carrito" />
        {
            cartList.length === 0
            ? <p></p>
            : <p style={{backgroundColor : "#ff6600"}}>{qtyProducts()}</p>
        }
        </span>
    );
}