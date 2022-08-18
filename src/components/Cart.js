import React from "react";
import CartItem from "./CartItem";
import { Link, Navigate, useNavigate } from "react-router-dom";


export default function Cart(props) {
    const {cartItems, setCartItems, totalCartQuantity, setTotalCartQuantity} = props;
    const navigate = useNavigate();
    let cartIsEmpty = true;
    
    if (totalCartQuantity > 0) {
        cartIsEmpty = true;
    } else {
        cartIsEmpty = false;
    }
    
    function clearCart() {
        setTotalCartQuantity(0);
        setCartItems([]);
    }

    function processCheckout() {
        clearCart();
        navigate('/shopping-cart/checkout');
    }

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
                            totalCartQuantity={totalCartQuantity}
                            setTotalCartQuantity={setTotalCartQuantity}
                            />
                    </li>
                ))
                }
                </ul>
                
                    <button className="checkout-button" onClick={processCheckout}disabled={cartIsEmpty ? false : true}>Checkout</button>
                
            </div>
      </div>
    );
  }

