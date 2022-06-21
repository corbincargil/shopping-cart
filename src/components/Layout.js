import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../components/Cart";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function Layout() {
    const [cartItems, setCartItems] = useState([]);

    return(
        <div className="layout">
        <BrowserRouter>
            <Header/>
            <Cart cartItems={cartItems}/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="Shop" element={<Shop setCartItems={setCartItems}/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        </div>
    )
}