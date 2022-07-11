import React from "react";
import { useState } from "react";


export default function CartItem(props) {
    const {product,price, cartItems, setCartItems} = props;
    const [quantity, setQuantity] = useState(1);

    function removeFromCart(itemID) {
        const newCart = cartItems.filter((item) => item.id != itemID)
        console.log(`Removing from cart: ${itemID}`)
        setCartItems(newCart);
    }

    function decrementQuantity() {
        if (quantity == 1) {removeFromCart(product.id)}
        setQuantity(quantity - 1);
    }

    function incrementQuantity() {
        setQuantity(quantity + 1);
    }


    return(
        <div className="cart-item">

            <div className="product-picture">
                <img src={product.pic} alt={product.name}/>
            </div>

            <div className="info">
                <p className="name">{product.name}</p>
                <div className="quantity-container">
                    <button onClick={() => decrementQuantity()}>-</button>
                    {quantity}
                    <button onClick={() => incrementQuantity()}>+</button>
                </div>
            </div>
            
            <p className="price">Price: ${Math.round(price*quantity*100)/100}</p>
            <button className="remove-button" onClick={() => {removeFromCart(product.id)}}>X</button>
        </div>
    )
} 