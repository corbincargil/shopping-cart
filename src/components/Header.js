import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../img/skate-warehouse-logo.png";
import cartIcon from "../img/cart-outline.png";


export default function Header() {
    const title = 'Skate Warehouse';


    return(
        <div className="header">
            <Link className="logo-link" to="/"><img className="logo" src={mainLogo} alt="main-logo" /></Link>
            <div className="links">
                <Link to="/shopping-cart//cart"><img id="cart-icon" src={cartIcon} alt="cart-icon" /></Link>
                <Link to="/shopping-cart/">Home</Link> 
                <Link to="/shopping-cart/shop">Shop</Link> 
                <Link to="/shopping-cart/about">About</Link> 
            </div>
        </div>
    )
}