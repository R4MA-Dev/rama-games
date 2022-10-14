import Header from './Header.jsx';
import ItemList from './ItemList.jsx'
import '../css/ItemListContainer.css'
import '../css/Item.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemListContainer = ()=>{

    return(
        <>
        <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
        <Header />
        <main>
            <ItemList />
        </main>
        </>
    );
}

export default ItemListContainer