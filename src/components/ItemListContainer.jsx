import Header from './Header.jsx';
import ItemList from './ItemList.jsx'
import '../css/ItemListContainer.css'
import '../css/Item.css'

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