import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([])

    const addItem = (item, quantity) =>{
        const boolean = isInCart(item)
        if(boolean === false){
            setCartList([
                ...cartList,
                item
            ])
            item.quantity = quantity
        }else{
            item.quantity += quantity
        }

    }

    const removeItem = (id)=>{
        const newCartList = cartList.filter(items => items.id !== id)
        setCartList([...newCartList])
    }

    const clear = ()=>{
        setCartList([])
    }

    const isInCart = (product)=>{
        return cartList.includes(product)
    }


    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider