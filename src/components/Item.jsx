import { Link } from "react-router-dom"

const Item = ({img, name, price, plataform,id})=>{
    return(
        <>  
            <div className="product-container">
                <img className="product-img" src={img} alt="Imagen Juego" />
                <p className="product-name">{name}</p>
                <p className="product-plataform">Plataforma: <strong>{plataform}</strong></p>
                <p className="product-price">Precio: <span>{price}AR$</span></p>
                <Link className='link' to={`/item/${id}`}><button className="btn-product">Ver detalles</button></Link>
            </div>
        </>
    )
}

export default Item