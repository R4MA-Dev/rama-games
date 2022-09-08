import { Link } from "react-router-dom"

const Item = ({img, name, price, plataform,id})=>{
    return(
        <>  
            <div id="product-container">
                <img id="product-img" src={img} alt="Imagen Juego" />
                <p id="product-name">{name}</p>
                <p id="product-plataform">Plataforma: <strong>{plataform}</strong></p>
                <p id="product-price">Precio: <span>{price}AR$</span></p>
                <Link className='link' to={`/item/${id}`}><button id="btn-product">Ver detalles</button></Link>
            </div>
        </>
    )
}

export default Item