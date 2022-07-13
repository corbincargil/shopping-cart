import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../img/skate-warehouse-logo.png";
import cartIcon from "../img/cart-outline.png";


export default function Header() {
    const title = 'Skate Warehouse';


    return(
        <div className="header">
            <Link className="logo-link" to="/shopping-cart/"><img className="logo" src={mainLogo} alt="main-logo" onClick={() => window.scrollTo({top:0,left:0})}/></Link>
            <div className="links">
                <Link to="/shopping-cart//cart"><img id="cart-icon" src={cartIcon} alt="cart-icon" onClick={() => window.scrollTo({top:0,left:0})}/></Link>
                <Link to="/shopping-cart/" onClick={() => window.scrollTo({top:0,left:0})}>Home</Link> 
                <Link to="/shopping-cart/shop" onClick={() => window.scrollTo({top:0,left:0})}>Shop</Link> 
                <Link to="/shopping-cart/about" onClick={() => window.scrollTo({top:0,left:0})}>About</Link> 
            </div>
        </div>
    )
}