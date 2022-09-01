import '../css/ItemListContainer.css'
import '../css/Item.css'
import ItemCount from './ItemCount.jsx'
import ItemList from './ItemList.jsx'

const ItemListContainer = (props)=>{
    const alertAdd = ()=>{
        if(ItemCount.number !== 0){
            alert(`Ha añadido ${ItemCount.number} elementos al carrito`)
        }
    }

    return(
        <main>
            <ItemList />
            <h1>{props.greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={alertAdd} />
        </main>
    );
}

export default ItemListContainer