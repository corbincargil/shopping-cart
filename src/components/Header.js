import React from "react";
import mainLogo from "../img/skate-warehouse-logo";
import { BrowserRouter } from "react-router-dom";

export default function Header() {
    const title = 'Skate Warehouse';


    return(
        <div className="header">
            <img src={mainLogo} alt="main-logo" />
            <h1>{title}</h1>
        </div>
    )
}