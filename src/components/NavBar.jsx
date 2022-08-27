import '../css/NavBar.css';
import { navBar } from '../js/navbar.js';
import { CartWidget } from './CartWidget.jsx';

const NavBar = ()=>{
  return (
    <nav>
        <p className="logo-p">R4MA GAMES</p>
        <ul id="ul" className="ul-menu">
            <li className='nav-item'>PlayStation</li>
            <li className='nav-item'>Xbox</li>
            <li className='nav-item'>Nintendo Switch</li>
            <li className='nav-item'>PC</li>
            {/*<p className='login-p'>Login</p>*/}
        </ul>
        <div id='div' className="hamburger" onClick={navBar}>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
        <CartWidget count="0" />
    </nav>
  );
}


export default NavBar;
