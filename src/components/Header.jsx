import imagen from '../img/imagen-header.png'
import '../css/Header.css'

const Header = ()=>{
    return(
        <header>
            <div id="mascara">
            <img id="imagen-header" src={imagen} alt="Imagen Header" />
            <span id="logo">R4MA GAMES</span>
            </div>
        </header>
    )
}

export default Header