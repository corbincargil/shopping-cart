import React from "react";
import ProductNavigation from "../components/ProductNavigation";
import ProductDisplay from "../components/ProductDisplay";

export default function Shop() {
    return(
        <div className="main-shop-container">
        <ProductNavigation />
        <ProductDisplay />
        </div>
    )
}