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


const clearCartItem = (cartItems, cartItemToRemove) =>{
     //find cart item to rmemove 
     const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id);

    // check quantity is to 1, if true remove cart item
    if (existingCartItem){
        return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
    }

    return cartItems
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});

export const CartProvider = ( {children} ) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(()=>{
        const newCartItemCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartItemCount);
    },[cartItems])

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity  * cartItem.price, 0)
        setCartTotal(newCartTotal);
    },[cartItems])

    const addItemToCart = (productToAdd) =>{
        setCartItems(addCartItem(cartItems,productToAdd));
    }

    const removeItemFromCart =(productToRemove) =>{
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (cartItemToRemove) => {
        setCartItems(clearCartItem(cartItems, cartItemToRemove));   
    }

    const value = {isCartOpen, 
        setIsCartOpen, 
        addItemToCart,  
        clearItemFromCart, 
        removeItemFromCart, 
        cartItems,
        cartCount,
        cartTotal,
    }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}