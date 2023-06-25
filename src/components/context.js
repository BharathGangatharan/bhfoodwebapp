import {createContext, useState} from 'react';

export const CartCont = createContext();

const CartContext = ({children})=>{
    const [cart,setCart] = useState([]);

    return <CartCont.Provider value={{cart,setCart}}>{children}</CartCont.Provider>
}

export default CartContext;