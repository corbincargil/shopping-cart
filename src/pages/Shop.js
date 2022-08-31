import React, { Children } from "react";
import ProductNavigation from "../components/ProductNavigation";
import ProductDisplay from "../components/ProductDisplay";
import { products } from "../util/products";
import { useEffect } from "react";


export default function Shop({ children }) {

    return(
        <div className="main-shop-container">
            {children}
        </div>
    )
}