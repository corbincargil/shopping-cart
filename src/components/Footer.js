import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"

export default function Footer() {
    return(
        <div className="footer">
            <div className="subscribe">
                <h2>Join the family</h2>
                <p>Sign up for our rewards program for exclusive offers, member's benefits, and free shipping on all orders!</p>
                <form>
                    <input placeholder="Enter your email..."type="email" id="mail"/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="about column">
                <h3>Skate Warehouse</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="shop column">
                <h3>Shop</h3>
                <ul>
                    <Link to="/shop"><li>Decks</li></Link>
                    <Link to="/shop"><li>Trucks</li></Link>
                    <Link to="/shop"><li>Wheels</li></Link>
                    <Link to="/shop"><li>Merchandise</li></Link>
                </ul>
            </div>
            <div className="contact column">
                <h3>Contact</h3>
                <span>corbin.cargil@gmail.com</span>
            </div>
        </div>
    )
}