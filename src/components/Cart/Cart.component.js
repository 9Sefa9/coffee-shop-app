import { AiOutlineShoppingCart } from 'react-icons/ai'

const Cart = () => {
 return (
        <div className='navbar-cart-container' >
            <AiOutlineShoppingCart size={50} />
            <span>{Number(localStorage.getItem('cartSize'))}</span>
        </div>
    );

}

export default Cart;

/** 
 * not used anymore. Gets localStorage depending if it is an Object or not.
 * @param {string} key - The actual key e.g. "cartContent"
 * @param {boolean} - True: gets localStorage as Object. False: another type otherwise      
 * const getLocalStorage = (key, isObject) => {
    switch (isObject) {
        case true: {
            if (!!localStorage.getItem(key)) {
                return [];
            }

            return JSON.parse(localStorage.getItem(key));
        }
        case false: {
            return localStorage.getItem(key);
        }
    }

    return null;
}

 */
