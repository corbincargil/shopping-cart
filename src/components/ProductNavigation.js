import React from "react";

export default function ProductNavigation() {
    return(
        <div className="product-navigation">
            <h3>Browse by product:</h3>
            <ul className="navigation">
                <li>Decks</li>
                <li>Trucks</li>
                <li>Wheels</li>
                <li>Merch</li>
            </ul>
            <h3>Browse by brand:</h3>
            <ul className="navigation">
                <li>Birdhouse</li>
                <li>Element</li>
                <li>Enjoi</li>
                <li>Girl</li>
                <li>Plan B</li>
                <li>Toy Machine</li>
                <li>Zero</li>
            </ul>
        </div>
    )
}