import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { navBar } from '../js/navbar.js';
import { CartWidget } from './CartWidget.jsx';

const NavBar = ()=>{
  return (
    <nav>
        <Link className='link' to="/"><p className="logo-p">R4MA GAMES</p></Link>
        <ul id="ul" className="ul-menu">
        <Link className='link' to="/category/0"><li onClick={navBar} className='nav-item'>PlayStation</li></Link>
        <Link className='link' to="/category/1"><li onClick={navBar} className='nav-item'>Xbox</li></Link>
        <Link className='link' to="/category/2"><li onClick={navBar} className='nav-item'>Nintendo Switch</li></Link>
        <Link className='link' to="/category/3"><li onClick={navBar} className='nav-item'>PC</li></Link>
            {/*<p className='login-p'>Login</p>*/}
        </ul>
        <div id='div' className="hamburger" onClick={navBar}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <Link to="/cart"><CartWidget /></Link>
    </nav>
  );
}


export default NavBar;
