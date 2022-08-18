import React from "react";
import { products } from "../util/products";
import { Link } from "react-router-dom";


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
                        <Link to={`/shopping-cart/shop/${product.name}`}>
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
                        <p className="new-price">${Math.floor(product.price*0.75)}.99</p>
                        </Link>
                    </li>
                ))
            }
            </ul>
        </div>
    )
}