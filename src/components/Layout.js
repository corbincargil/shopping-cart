import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../components/Cart";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { products } from "../util/products";

export default function Layout() {
    const [cartItems, setCartItems] = useState([]);

    return(
        <div className="layout">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header/>
            <Routes>
                <Route path="/shopping-cart/cart" element={
                    <Cart 
                    cartItems={cartItems}
                    setCartItems={setCartItems}/>} />
                <Route index path="/" element={<Home />} />
                <Route path="/shopping-cart/about" element={<About />} />
                <Route path="/shopping-cart/shop" element={
                    <Shop 
                    cartItems={cartItems} 
                    setCartItems={setCartItems}/>} 
                    />
            </Routes>
            <Footer/>
        </BrowserRouter>
        </div>
    )
}