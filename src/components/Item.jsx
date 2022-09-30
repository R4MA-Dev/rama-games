import { Link } from "react-router-dom"
import { useEffect} from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

const Item = ({img, name, price, plataform,id})=>{

    useEffect(()=>{
        Aos.init({duration: 300})
    },[])

    return(
        <>  
            <div className="product-container" data-aos="fade-up">
                <img className="product-img" src={img} alt="Imagen Juego" />
                <p className="product-name">{name}</p>
                <p className="product-plataform">Plataforma: <strong>{plataform}</strong></p>
                <p className="product-price">Precio: <span>{price}AR$</span></p>
                <Link className='link' to={`/item/${id}`}><button className="btn-product">Ver detalles</button></Link>
            </div>
        </>
    )
}

export default Item