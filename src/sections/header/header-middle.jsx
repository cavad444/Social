import {useEffect,useState} from 'react';
import { CartContext } from "../../context/cartContext";
import { useContext } from "react";

function HeaderMiddle(){
    
    const {carts,getCarts} = useContext(CartContext);
    useEffect(()=>{
        getCarts();
    },[]);


    return(
        <section className="header-middle-section">
           {carts.map((cart)=>{
            return(
            <div key={cart.id} className="middle-cart">
                <div className="cart-top-section">
                <div className="cart-top-section-texts-images">
                    <img className="middle-pp-image" src="/images/pp.jpg" alt="" />
                    <div className="cart-main-texts">
                    <span className="cart-username">ca.v.ad</span>
                    <p className="cart-location">{cart.location}</p>
                </div>
                 </div>
                 <div className="three-dots">
                    ...
                 </div>
                 </div>
                <img className="middle-main-image" src="/images/test-image.jpg" alt="" />
            </div>
            );
            })}
        </section>
    );
}
export default HeaderMiddle;