import React from "react";
import CartItem from "./CartItem";

export default function Cart(props) {
    const {cartItems, setCartItems} = props;


    function removeFromCart(item) {
        //neeed to try removing by passing the key or id for the item as an argument
        console.log(`Revmoving from cart: ${item.name}`)
    }

    return (
      <div className="cart-background">
        <div className="cart-container">
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
                            />
                    </li>
                ))
                }
                </ul>
            </div>
      </div>
    );
  }

