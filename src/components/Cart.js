import React from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
    const {cartItems, setCartItems, setItemQuantity} = props;
    
    return (
      <div className="cart-background">
        <div className="cart-container">
            {cartItems == 0 && 
            <h3>
                Your cart is currently empty!
            </h3>}
            <ul>
                {
                    props.cartItems.map((product) => (
                    <li 
                        className='product in-cart' 
                        key={product.id}>
                        <CartItem 
                            product={product} 
                            price={product.price}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            setItemQuantity={setItemQuantity}
                            />
                    </li>
                ))
                }
                </ul>
            </div>
      </div>
    );
  }

