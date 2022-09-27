import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext()

const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([])

    const addItem = (item, quantity) =>{
            let repeatedObject = cartList.find(product => product.id === item.id)

            if(repeatedObject === undefined){
                setCartList([
                    ...cartList,
                    {
                        id : item.id,
                        img : item.img,
                        name : item.name,
                        price : item.price,
                        quantity : quantity
                    }
                ])
                toast(`Se han añadido ${quantity} producto/s al carrito`)
            }else{
                if(repeatedObject.quantity >= item.stock || repeatedObject.quantity + quantity > item.stock){
                    toast("No puedes comprar mas del stock disponible")
                }else{
                    repeatedObject.quantity += quantity
                    setCartList([...cartList])
                    toast(`Se han añadido ${quantity} producto/s al carrito`)
                }
            }
    }

    const removeItem = (id)=>{
        const newCartList = cartList.filter(items => items.id !== id)
        setCartList([...newCartList])
    }

    const clear = ()=>{
        setCartList([])
    }

    const qtyProducts = ()=>{
        const qty = []
        cartList.forEach(elem => qty.push(elem.quantity))
        const totalQty = qty.reduce((a,b) => a + b, 0)

        return totalQty
    }

    const calcAll = ()=>{
        const qty = []
        cartList.forEach(elem => {qty.push(elem.price * elem.quantity)})
        const totalQty = qty.reduce((a, b) => a + b, 0)

        return totalQty
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, qtyProducts, calcAll}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider