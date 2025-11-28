import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle, addToCart }) => {

    const { img, name, price, stock } = bottle;

    return (
        <div className='bottle'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>$ {price}</p>
            <p>{stock} remaining</p>
            <button onClick={() => addToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;