import React from "react";
import { useState } from "react";


export default function CartItem(props) {
    const {product,price, cartItems, setCartItems, productQuantity, totalCartQuantity, setTotalCartQuantity} = props;
    const [quantity, setQuantity] = useState(productQuantity);

    function removeFromCart(currentItem) {
        console.log(`Removing from cart: ${currentItem}`)
        setCartItems(cartItems.filter((item) => item.id != currentItem.id));
        setTotalCartQuantity(totalCartQuantity - (quantity))
    }

    function decrementQuantity() {
        if (quantity == 1) {removeFromCart(product)}
        setQuantity(quantity - 1);
        setTotalCartQuantity(totalCartQuantity - 1);
    }

    function incrementQuantity() {
        setQuantity(quantity + 1);
        setTotalCartQuantity(totalCartQuantity + 1);
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
            <button className="remove-button" onClick={() => {removeFromCart(product)}}>X</button>
        </div>
    )
} 