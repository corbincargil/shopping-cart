import React from "react";
import { products } from "../util/products";

export default function FeaturedItems() {

    function checkFeatured(item) {
        if (item.featured) {return item}
    }
    const fetauredProducts = products.filter(checkFeatured);

    return(
        <div className="featured-items">
            <ul>
            {
                fetauredProducts.map((product) => (
                    
                    <li 
                        className='featured product' 
                        key={product.id}>
                        <img src={product.pic} alt={product.name}/>
                        <p className="name">{product.name}</p>
                        <p className="description">{product.description}</p>
                        <p className="price">Price: ${product.price}</p>
                        <p className="new-price">${Math.floor(product.price*0.75)}.99</p>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}