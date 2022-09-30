import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Cart from './components/Cart.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-loading';
import CartContextProvider from './context/CartContext.jsx';
import './css/normalize.css'
import './css/media-queries.css'
import './css/spinner.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<h1 style={{color : "white", textAlign: "center"}}>Error 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </React.StrictMode>
);

