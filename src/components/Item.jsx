const Item = ({img, name, price, plataform})=>{
    return(
        <>  
            <div id="product-container">
                <img id="product-img" src={img} alt="Imagen Juego" />
                <p id="product-name">{name}</p>
                <p id="product-plataform">Plataforma: <strong>{plataform}</strong></p>
                <p id="product-price">Precio: <span>{price}AR$</span></p>
                <button id="btn-product">Ver detalles</button>
            </div>
        </>
    )
}

export default Item