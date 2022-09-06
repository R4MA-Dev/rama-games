import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/normalize.css'
import './css/media-queries.css'
import Header from './components/Header.jsx'
import NavBar from './components/NavBar.jsx';
//import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Header />
    {/*<ItemListContainer greeting="Hola Mundo! Aca estaran mis productos"/>*/}
    <ItemDetailContainer />

  </React.StrictMode>
);

