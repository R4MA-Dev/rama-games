import { useState } from "react"
import '../css/ItemCount.css'

const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial)

    const increaseCount = ()=>{
        setCount(count + 1)
        if(count === stock){
            setCount(count)
        }
    }

    const decreaseCount = ()=>{
        setCount(count - 1)
        if(count === initial){
            setCount(count)
        }
    }

    ItemCount.number = count

    return(
        <div id="count-container">
            <div id="counter">
                <button onClick={decreaseCount} className="btn" id="btnDecrease">-</button>
                <p>{count}</p>
                <button onClick={increaseCount} className="btn" id="btnIncrease">+</button>
            </div>
            <button id="btnAdd" onClick={onAdd}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount