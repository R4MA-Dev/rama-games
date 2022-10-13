import { Link } from 'react-router-dom';
import '../data/firebaseConfig.js'
import { navBar } from '../js/navbar.js';
import { CartWidget } from './CartWidget.jsx';
import '../css/NavBar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut } from 'firebase/auth';
import { auth } from '../data/firebaseConfig.js';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';
import { UserContext } from '../context/UserContext.jsx';

const NavBar = ()=>{
  const {setCartList} = useContext(CartContext)
  const {session} = useContext(UserContext)

  const logout = async()=>{
    await signOut(auth)
    toast.success("Se ha cerrado su sesión")
    setCartList([])
    window.localStorage.clear()
  }

  return (
    <>
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <nav>
        <Link className='link' to="/"><p className="logo-p">R4MA GAMES</p></Link>
        <ul id="ul" className="ul-menu">
        <Link className='link' to="/category/0"><li onClick={navBar} className='nav-item'>PlayStation</li></Link>
        <Link className='link' to="/category/1"><li onClick={navBar} className='nav-item'>Xbox</li></Link>
        <Link className='link' to="/category/2"><li onClick={navBar} className='nav-item'>Nintendo Switch</li></Link>
        <Link className='link' to="/category/3"><li onClick={navBar} className='nav-item'>PC</li></Link>
        {
          session === true
          ?<li onClick={navBar} className='btn nav-item'><button onClick={logout} id="logout">Cerrar Sesion</button></li>
          :<li onClick={navBar} className='btn nav-item'><Link to="/login"><button id="login">Loguearse</button></Link></li>
        }
        </ul>
        <div id='div' className="hamburger" onClick={navBar}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <Link to="/cart"><CartWidget /></Link>
    </nav>
    </>
  );
}


export default NavBar;