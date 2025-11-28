
const getCartFromLS = () => {
    const getItem = localStorage.getItem('cart');

    if (getItem) {
        const storedCart = JSON.parse(getItem);
        return storedCart;
    }
    return [];
}



const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}


const removeCartFromLs = id => {
    const storedCart = getCartFromLS();
    const remainingCart = storedCart.filter(storeId => storeId !== id);
    saveCartToLS(remainingCart);

}


const addItemToCart = (id) => {
    const cart = getCartFromLS();
    cart.push(id);

    saveCartToLS(cart);
}

export { getCartFromLS, addItemToCart, removeCartFromLs };