import logoCart from "../img/shopping-cart.png"

export const CartWidget = ({count})=>{
    return(
        <span className="carrito">
        <img src={logoCart} alt="Carrito" />
        <p>{count}</p>
        </span>
    );
}