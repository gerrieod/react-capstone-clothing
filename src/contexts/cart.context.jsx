import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    // check if item is in array
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id);

    // MATCH FOUND
    if(existingCartItem){
        return cartItems.map(
            (cartItem) => cartItem.id === productToAdd.id ? 
            {...cartItem, quantity: cartItem.quantity + 1}
            :cartItem);
    }
    // if not add to array
    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeCartItem = (cartItems, cartItemToRemove) =>{
    //find cart item to rmemove 
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id);

    // check quantity is to 1, if true remove cart item
    if (existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
    }

    return cartItems.map(
        (cartItem) => cartItem.id === cartItemToRemove.id ? 
        {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem);
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0,
});

export const CartProvider = ( {children} ) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)

    useEffect(()=>{
        const newCartItemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartItemCount);
    },[cartItems])

    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));   
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart,  removeItemFromCart, cartItems, cartCount}
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}