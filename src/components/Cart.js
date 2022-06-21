import React from "react";

export default function Cart(props) {


    return (
      <div className="cart hidden">
         <ul>
            {
                props.cartItems.map((product) => (
                <li 
                    className='product in-cart' 
                    key={product.id}>
                        <div className="product-picture">
                            <img src={product.pic} alt={product.name}/>
                        </div>
                    <p className="name">{product.name}</p>
                    <p className="price">Price: ${product.price}</p>
                </li>
            ))
            }
            </ul>
      </div>
    );
  }

