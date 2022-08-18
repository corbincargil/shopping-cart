import React from "react";
import Cart from "./Cart";

export default function Checkout(props) {
    const {totalCartQuantity} = props;

    // if (totalCartQuantity == 0) {
    //     return(
    //         <div>
    //             {alert('Your cart is currently empty!')}
    //             <h2 className="cart-empty">Your cart is currently empty!</h2>
    //         </div>
    //     )
    // } else {
        return(
            <div className="checkout">
                <h2>Your order is being processed.</h2>
                <h2>Thank you for shopping with us!</h2>
            </div>
        )
    // }
}