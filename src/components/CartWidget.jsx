import logoCart from "../shopping-cart.png"

export const CartWidget = (props)=>{
    return(
        <span className="carrito">
        <img src={logoCart} alt="Carrito" />
        <p>{props.count}</p>
        </span>
    );
}