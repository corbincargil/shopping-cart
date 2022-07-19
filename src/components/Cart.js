import React from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
    const {cartItems, setCartItems, setTotalCartQuantity} = props;
    
    return (
      <div className="cart-background">
        <div className="cart-container">
            {cartItems == 0 && 
            <h3>
                Your cart is currently empty!
            </h3>}
            <ul>
                {
                    cartItems.map((product) => (
                    <li 
                        className='product in-cart' 
                        key={product.id}>
                        <CartItem 
                            productQuantity={product.quantity}
                            product={product} 
                            price={product.price}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            setTotalCartQuantity={setTotalCartQuantity}
                            />
                    </li>
                ))
                }
                </ul>
            </div>
      </div>
    );
  }

