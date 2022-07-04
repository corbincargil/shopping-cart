import React from "react";
import { useEffect } from "react";

export default function ProductDisplay(props) {
    const {cartItems, setCartItems} = props;

    function addToCart(item) {
        console.log(`aded to cart: ${item.name}`)
        item.quantity = 1;
        setCartItems(prevCart => [...prevCart, item])
    }

    return(
        <div className="product-display">
            <ul>
            {
                props.productsDisplayed.map((product) => (
                <li 
                    className='product' 
                    key={product.id}>
                    <div className="flip-container">
                        <div className="product-picture">
                            <div className="front">
                                <img src={product.pic} alt={product.name}/>
                            </div>
                            <div className="back">
                                <img src={product.picBack} alt={product.name}/>
                            </div>
                        </div>
                    </div>
                    <p className="name">{product.name}</p>
                    <p className="description">{product.description}</p>
                    <p className="price">Price: ${product.price}</p>
                    <button className="button" id={product.id} onClick={() => {addToCart(product)}}>Add to cart</button>
                </li>
            ))
            }
            </ul>
        </div>
    )
}