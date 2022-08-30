import '../css/ItemListContainer.css'
import ItemCount from './ItemCount.jsx'

const ItemListContainer = (props)=>{
    const alertAdd = ()=>{
        if(ItemCount.number !== 0){
            alert(`Ha añadido ${ItemCount.number} elementos al carrito`)
        }
    }

    return(
        <main>
            <h1>{props.greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={alertAdd} />
        </main>
    );
}

export default ItemListContainer