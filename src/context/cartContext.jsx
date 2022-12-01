import { createContext,useState } from "react";
import {addDoc, collection,getDocs} from 'firebase/firestore';
import { db } from "../firebase/firebase-config";
export const CartContext = createContext({
    carts:[],
    getCarts:()=>{},
    changeImageUrlValue:()=>{},
    changeDescriptionValue:()=>{},
    changeLocationValue:()=>{},
    addCarts:()=>{},
    imageUrl:'',
    location:'',
    description:'',

}) 

function CartProvider({children}){
    const [carts,setCarts] = useState([]);
    const cartsCollectionRef = collection(db,'cart');
    const [newImageUrl,setNewImageUrl] = useState('');
    const [newDescription,setNewDescription] = useState('');
    const [newLocation ,setNewLocation] = useState('');

    function changeImageUrlValue(e){
        setNewImageUrl(e.target.value);
    };
    function changeDescriptionValue(e){
       setNewDescription(e.target.value);
    };
    function changeLocationValue(e){
        setNewLocation(e.target.value);
    };


    async function getCarts(){
        const data = await getDocs(cartsCollectionRef);
        setCarts(data.docs.map((doc) => ({...doc.data(),id:doc.id}))); 
    };

    async function addCarts(){
        await addDoc(cartsCollectionRef,{description:newDescription,imageUrl:newImageUrl,location:newLocation});
      
    }
    
    const value = {carts,getCarts,changeDescriptionValue,changeImageUrlValue,changeLocationValue,addCarts,newImageUrl,newDescription,newLocation};
return(
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
)    
}
export default CartProvider;