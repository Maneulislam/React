import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addItemToCart, getCartFromLS, removeCartFromLs } from '../../utilities/localstorage';
import Cart from '../cart/Cart';

const Bottles = ({ bottlePromise }) => {

    const bottles = use(bottlePromise);

    const [cart, setCart] = useState([]);


    useEffect(() => {

        const savedCartIds = getCartFromLS();

        const storedCart = [];


        for (const id of savedCartIds) {
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        setCart(storedCart);

    }, [bottles])


    const addToCart = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);

        addItemToCart(bottle.id)
    }

    const removeToCart = (id) => {
        const remaining = cart.filter(bootle => bootle.id !== id);
        setCart(remaining);

        removeCartFromLs(id);
    }


    return (
        <div >
            <h3>Bottle: {bottles.length}</h3>

            <p>Added to Cart: {cart.length}</p>

            <Cart cart={cart} removeToCart={removeToCart}></Cart>

            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} addToCart={addToCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;