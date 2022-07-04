import React from "react";

export default function Cart(props) {
    const {cartItems, setCartItems} = props;


    function removeFromCart(item) {
        //neeed to try removing by passing the key or id for the item as an argument
        console.log(`Revmoving from cart: ${item.name}`)
    }

    function decrementQuantity(quantity) {
        quantity--;
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
                            <div className="product-picture">
                                <img src={product.pic} alt={product.name}/>
                            </div>
                        <div className="info">
                            <p className="name">{product.name}</p>
                            <div className="quantity-container">
                                <button onClick={() => decrementQuantity(product.quantity)}>-</button>
                                {product.quantity}
                                <button>+</button>
                            </div>
                        </div>
                        
                        <p className="price">Price: ${product.price*product.quantity}</p>
                        <button className="remove-button" onClick={() => {removeFromCart(product)}}>X</button>
                    </li>
                ))
                }
                </ul>
            </div>
      </div>
    );
  }

