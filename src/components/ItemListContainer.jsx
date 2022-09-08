import '../css/ItemListContainer.css'
import '../css/Item.css'
import Header from './Header.jsx'
import ItemList from './ItemList.jsx'

const ItemListContainer = ()=>{

    return(
        <>
        <Header />
        <main>
            <ItemList />
        </main>
        </>
    );
}

export default ItemListContainer