import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return(
        <div className="layout">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="Shop" element={<Shop />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        </div>
    )
}