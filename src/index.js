import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/normalize.css'
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <ItemListContainer greeting="Hola Mundo! Aca estaran mis productos"/>
  </React.StrictMode>
);

