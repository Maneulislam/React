import React from 'react';
import './Cart.css'

const Cart = ({ cart, removeToCart }) => {

    return (
        <div className='cart'>
            {
                cart.map(bottle => <div key={bottle.id}>

                    <img src={bottle.img} alt="" />
                    <button onClick={() => removeToCart(bottle.id)}>x</button>
                </div>)
            }
        </div>
    );
};

export default Cart;