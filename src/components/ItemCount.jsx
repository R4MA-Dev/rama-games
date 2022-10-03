import { useState } from "react"
import '../css/ItemCount.css'

const ItemCount = ({stock, initial, onAdd})=>{
    const [count, setCount] = useState(initial)

    const increaseCount = ()=>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const decreaseCount = ()=>{
        if(count > initial){
            setCount(count - 1)
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
            {
                stock && count
                ? <button id="btnAdd" onClick={()=>{onAdd(count)}}>Añadir al carrito</button>
                : <button id="btnAdd" disabled>Añadir al carrito</button>
            }
            
        </div>
    )
}

export default ItemCount