import React from "react";
import { useState } from "react";


export default function CartItem(props) {
    const [quantity, setQuantity] = useState(10);
    const [price, setPrice] = useState(props.price)




    return(
        <div className="cart-item">
            
        </div>
    )
} 