import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../components/Cart";
import About from "../pages/About";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";
import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";
import { useState } from "react";
import { products } from "../util/products";

export default function Layout() {
    const [cartItems, setCartItems] = useState([]);
    const [filterBy, setFilterBy] = useState();
    const [filterWord, setFilterWord] = useState();
    const [productsDisplayed, setProductsDisplayed] = useState(() => products);
    const [totalCartQuantity,setTotalCartQuantity] = useState(0);


    return(
        <div className="layout">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header
                totalCartQuantity={totalCartQuantity}
                setTotalCartQuantity={setTotalCartQuantity}
            />
            <Routes>
                <Route path="/shopping-cart/cart" element={
                    <Cart 
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    totalCartQuantity={totalCartQuantity}
                    setTotalCartQuantity={setTotalCartQuantity}
                    />} 
                />
                <Route index path="/" element={<Home />} />
                <Route path="/shopping-cart/" element={<Home />} />
                <Route path="/shopping-cart/about" element={<About />} />
                <Route path="/shopping-cart/shop" element={
                    <Shop 
                    cartItems={cartItems} 
                    setCartItems={setCartItems}
                    filterBy={filterBy}
                    setFilterBy={setFilterBy}
                    filterWord={filterWord}
                    setFilterWord={setFilterWord}
                    productsDisplayed={productsDisplayed}
                    setProductsDisplayed={setProductsDisplayed}
                    totalCartQuantity={totalCartQuantity}
                    setTotalCartQuantity={setTotalCartQuantity}
                />}/> 
                <Route 
                    path="/shopping-cart/shop/:name" 
                    element={<ProductDetail 
                                totalCartQuantity={totalCartQuantity}
                                setTotalCartQuantity={setTotalCartQuantity}
                                setCartItems={setCartItems}
                                products={products}/>}
                />
                <Route
                path="/shopping-cart/checkout"
                element={<Checkout/>}
                />

            </Routes>
            <Footer
                filterBy={filterBy}
                setFilterBy={setFilterBy}
                filterWord={filterWord}
                setFilterWord={setFilterWord}
                setProductsDisplayed={setProductsDisplayed}
            />
        </BrowserRouter>
        </div>
    )
}