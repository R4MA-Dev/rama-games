import music from '../js/header.js'
import '../css/Header.css'
import imagen from '../img/imagen-header.png'

const Header = ()=>{
    return(
        <header>
            <div id="mascara">
            <img onClick={music} id="imagen-header" src={imagen} alt="Imagen Header" />
            <span id="logo">R4MA GAMES</span>
            </div>
        </header>
    )
}

export default Header