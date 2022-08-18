import { useEffect } from 'react';
import { products } from "../util/products";
import { Link } from "react-router-dom";
import "../styles/footer.css"

export default function Footer(props) {
    const {filterBy, setFilterBy, filterWord, setFilterWord, setProductsDisplayed} = props;

    function handleClick(e) {
        setFilterBy(e.currentTarget.className);
        setFilterWord(e.currentTarget.id);
    }

    function filterByBrand(product) {
        return product.brand == filterWord;
    }

    function filterByType(product) {
        return product.type == filterWord;
    }

    useEffect(() => {
        window.scrollTo({top:0,left:0, behavior: 'smooth'})
        if (filterBy == 'brand') {
            setProductsDisplayed(products.filter(filterByBrand))
        } else if (filterBy == 'type') {
            setProductsDisplayed(products.filter(filterByType))
        }
    }, [filterBy,filterWord])

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
                <h2>Skate Warehouse</h2>
                <ul>
                    <Link to="/shopping-cart/"><li onClick={() => window.scrollTo({top:0,left:0, behavior: 'smooth'})}>Home</li></Link>
                    <Link to="/shopping-cart/about"><li onClick={() => window.scrollTo({top:0,left:0, behavior: 'smooth'})}>About</li></Link>
                    <Link to="/shopping-cart/about"><li onClick={() => window.scrollTo({top:0,left:0, behavior: 'smooth'})}>FAQ</li></Link>
                </ul>
            </div>
            <div className="shop column">
            <Link to="/shopping-cart/shop"><h2 onClick={handleClick} className="">Shop</h2></Link>
                <ul>
                    <Link to="/shopping-cart/shop"><li onClick={handleClick} className="type" id="deck">Decks</li></Link>
                    <Link to="/shopping-cart/shop"><li onClick={handleClick} className="type" id="trucks">Trucks</li></Link>
                    <Link to="/shopping-cart/shop"><li onClick={handleClick} className="type" id="wheels">Wheels</li></Link>
                    <Link to="/shopping-cart/shop"><li onClick={handleClick} className="type" id="merch">Merchandise</li></Link>
                </ul>
            </div>
            <div className="contact column">
                <h2>Contact</h2>
                <p> <a href="https://github.com/corbincargil" target="_blank" rel="noopener noreferrer">Github</a></p>
                <span>corbin.cargil@gmail.com</span>
            </div>
        </div>
    )
}