import React from "react";
import { products } from "../util/products";


export default function ProductDisplay() {
    return(
        <div className="product-display">
            <ul>
            {
            products.map((product) => (
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
                </li>
            ))
            }
            </ul>
        </div>
    )
}