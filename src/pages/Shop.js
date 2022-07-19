import React from "react";
import ProductNavigation from "../components/ProductNavigation";
import ProductDisplay from "../components/ProductDisplay";
import { products } from "../util/products";
import { useEffect } from "react";


export default function Shop(props) {
    const {cartItems, setCartItems, filterBy, setFilterBy, filterWord, setFilterWord, productsDisplayed, setProductsDisplayed, totalCartQuantity, setTotalCartQuantity} = props;
    
    // useEffect(() => {
    //     setTotalCartQuantity(cartItems.length)
    // }, [cartItems])

    return(
        <div className="main-shop-container">
        <ProductNavigation 
            filterBy={filterBy}
            setFilterBy={setFilterBy}
            filterWord={filterWord}
            setFilterWord={setFilterWord}
            setProductsDisplayed={setProductsDisplayed}
        />
        <ProductDisplay 
            productsDisplayed={productsDisplayed}
            cartItems={cartItems}
            setCartItems={setCartItems}
            totalCartQuantity={totalCartQuantity}
            setTotalCartQuantity={setTotalCartQuantity}
        />
        </div>
    )
}