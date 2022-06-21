import { useEffect } from 'react';
import { products } from "../util/products";


export default function ProductNavigation(props) {
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
        if (filterBy == 'brand') {
            setProductsDisplayed(products.filter(filterByBrand))
        } else if (filterBy == 'type') {
            setProductsDisplayed(products.filter(filterByType))
        } else {
            console.log("ERRORITO")
        }
    }, [filterBy,filterWord])

    return(
        <div className="product-navigation">
            <h3>Browse by product:</h3>
            <ul className="navigation">
                <li onClick={handleClick} className="type" id="deck">Decks</li>
                <li onClick={handleClick} className="type" id="trucks">Trucks</li>
                <li onClick={handleClick} className="type" id="wheels">Wheels</li>
                <li onClick={handleClick} className="type" id="merch">Merch</li>
            </ul>
            <h3>Browse by brand:</h3>
            <ul className="navigation">
                <li onClick={handleClick} className="brand" id="ace">Ace</li>
                <li onClick={handleClick} className="brand" id="dc">DC</li>
                <li onClick={handleClick} className="brand" id="element">Element</li>
                <li onClick={handleClick} className="brand" id="enjoi">Enjoi</li>
                <li onClick={handleClick} className="brand" id="girl">Girl</li>
                <li onClick={handleClick} className="brand" id="nike">Nike</li>
                <li onClick={handleClick} className="brand" id="planB">Plan B</li>
                <li onClick={handleClick} className="brand" id="spitFire">Spitfire</li>
                <li onClick={handleClick} className="brand" id="toyMachine">Toy Machine</li>
                <li onClick={handleClick} className="brand" id="volcom">Volcom</li>
                <li onClick={handleClick} className="brand" id="zero">Zero</li>
            </ul>
        </div>
    )
}