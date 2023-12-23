import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.style.scss"

const CartIcon = () => {
    
    const {isCartOpen, setIsCartOpen, cartItems, cartCount} = useContext(CartContext)

    const toggleIsCartOPen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOPen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon