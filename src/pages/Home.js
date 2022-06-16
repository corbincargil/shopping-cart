import React from "react";
import FeaturedItems from "../components/FeaturedItems";

export default function Home() {
    return(
        <div className="home-background">
            <div className="home-content">
                <h1>Featured Products</h1>
                <FeaturedItems />
            </div>
        </div>
    )
}