//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Context
import UserContextProvider from './context/UserContext.jsx';
import CartContextProvider from './context/CartContext.jsx';

//Components
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Cart from './components/Cart.jsx'

//Libraries
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-loading';

//CSS
import './css/normalize.css'
import './css/media-queries.css'
import './css/spinner.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element={<ItemDetailContainer />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='*' element={<h1 style={{color : "white", textAlign: "center"}}>Error 404</h1>}/>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

