import { createContext,useState } from "react"

export const CartContext = createContext({
    carts:'',
}) 

function CartProvider({children}){
    const [carts,setCarts] = useState('');
    const value = {carts};
return(
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
)    
}
export default CartProvider;