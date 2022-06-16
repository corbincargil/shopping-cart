import React from "react";
import { products } from "../util/products";

export default function FeaturedItems() {
    return(
        <div className="featured-items">
            <ul>
            {
                products.map((product) => (
                    <li 
                        className='product' 
                        key={product.id}>
                        {/* <img src={product.pic} alt={product.name}/> */}
                        <p>{product.name}</p>
                        <p>{product.description}</p>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}