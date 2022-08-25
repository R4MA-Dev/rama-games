import '../css/NavBar.css';
import './CartWidget.jsx'
import { CartWidget } from './CartWidget.jsx';

const NavBar = ()=>{
  return (
    <nav>
        <p className="logo-p">R4MA GAMES</p>
        <ul>
            <li>PlayStation</li>
            <li>Xbox</li>
            <li>Nintendo Switch</li>
            <li>PC</li>
        </ul>
        <p className='login-p'>Login</p>
        <CartWidget count="0" />
    </nav>
  );
}

export default NavBar;
