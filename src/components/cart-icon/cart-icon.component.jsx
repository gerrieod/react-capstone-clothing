import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.style";

const CartIcon = () => {
    
    const {isCartOpen, setIsCartOpen, cartItems, cartCount} = useContext(CartContext)

    const toggleIsCartOPen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOPen}>
            <ShoppingIcon />
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon