import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = ({ bottlePromise }) => {

    const bottles = use(bottlePromise);

    const [cart, setcart] = useState([]);

    const addToCart = (bottle) => {
        console.log("Add cart clicked", bottle);
    }


    return (
        <div >
            <h3>Bottle: {bottles.length}</h3>

            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle key={bottle.id} addToCart={addToCart} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;