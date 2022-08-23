import '../App.css';

function NavBar() {
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
    </nav>
  );
}

export default NavBar;
