import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../img/skate-warehouse-logo.png";


export default function Header() {
    const title = 'Skate Warehouse';


    return(
        <div className="header">
            <img src={mainLogo} alt="main-logo" />
            {/* <h1>{title}</h1> */}
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="shop">Shop</Link> 
                <Link to="about">About</Link> 
            </div>
        </div>
    )
}