import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../img/skate-warehouse-logo.png";
import cartIcon from "../img/cart-outline.png";


export default function Header() {
    const title = 'Skate Warehouse';


    return(
        <div className="header">
            <img className="logo" src={mainLogo} alt="main-logo" />
            <div className="links">
                <Link to="/cart"><img id="cart-icon" src={cartIcon} alt="cart-icon" /></Link>
                <Link to="/">Home</Link> 
                <Link to="shop">Shop</Link> 
                <Link to="about">About</Link> 
            </div>
        </div>
    )
}