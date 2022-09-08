import ItemCount from "./ItemCount.jsx"

const ItemDetail = ({item})=>{

    const alertAdd = ()=>{
        if(ItemCount.number !== 0){
            alert(`Ha añadido ${ItemCount.number} elementos al carrito`)
        }
    }

    return(
        <div id="item-detail-container">
            <img id="item-img" src={item.img} alt="Imagen Juego" />
            <div id="item-details">
                <div>
                    <h1 id="h1-title">{item.name}</h1>
                    <p id="p-stock">En stock: <span>{item.stock}</span></p>
                </div>
                <p id="p-description">{item.description}</p>
                <p id="p-plataform">Plataforma: {item.plataform}</p>
                <div id="buy-box">
                    <p id="p-price">Precio: <span>{item.price} AR$</span></p>
                    <ItemCount stock={item.stock} initial={1} onAdd={alertAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail