import { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'
//import CartSlice from '../Cart/Cart.redux.js';

const Cart = () => {

    const [state, setState] = useState();
    useEffect(() => {
        setState(localStorage.getItem('cartSize'));
    }, [state])
    
   
    return (
        <div className='navbar-cart-container' >
            <AiOutlineShoppingCart size={50} />
            <span>{state}</span>
        </div>
    );

}
const getLocalStorage = (key,isObject) => {
    switch(isObject){
        case true:{
            if(!!localStorage.getItem(key)){
                return [];
            }

            return JSON.parse(localStorage.getItem(key));
        }
        case false:{
            return localStorage.getItem(key);
        }
    }

    return null;
}
export const addItem = item => {
    // Add quantity later ? 
    // before: [{id:0, name:'cappucino'}]
    const cartContent = getLocalStorage('cartContent',true);
    
    // after: [{id:0, name:'cappucino'},{id:1, name:'mocca'}]
    const newCartContent = cartContent.concat(item);
    localStorage.setItem('cartContent',JSON.stringify(newCartContent));
};
export const increaseCartSize = size =>{
    const newCartSize = Number(getLocalStorage('cartSize',false)) + size;
    
    localStorage.setItem('cartSize',newCartSize);
}
export const removeItem = item => {
    const cartContent = JSON.parse(localStorage.getItem('cartContent'));
    
}


export default Cart;