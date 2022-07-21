import { useParams } from "react-router-dom";
import "../styles/product-detail.css";
import starIcon from "../img/star.png";


export default function ProductDetail(props) {
    const {products, setCartItems, totalCartQuantity, setTotalCartQuantity} = props;
    let { name } = useParams();

    let product = products.find(product => name === product.name)

    function addToCart(item) {
        console.log(`aded to cart: ${item.name}`)
        if (item.quantity >= 0) {
            item.quantity++;
            setTotalCartQuantity( totalCartQuantity + 1)
        } else {
            item.quantity = 1;
            setCartItems(prevCart => [...prevCart, item])
            setTotalCartQuantity( totalCartQuantity + 1)
        }
        console.log(`item quantity: ${item.quantity}`)
    }

    return(
        <div className="product-container">
            <div className="image">{<img src={product.pic} alt={product.name} />}</div>
            <div className="text">
                <div className="product-info">
                    <div className="name-price">
                    <h1>{name}</h1>
                        <h2>${product.price}</h2> 
                    </div>
                    <div className="description">
                        <p>The {name} will make all of your dreams come true. Hands-down the best purchase you could ever make! Buying this product is the first step toward the life you've always wanted. What are you waiting for? Go ahead and add this item to the cart! You won't regret it.</p>
                    </div>
                    <div className="reviews">
                        <div className="stars">
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                            <img src={starIcon} alt="star" />
                        </div>
                        <span>1,296 Reviews</span>
                    </div>
                </div>
                <div className="product-details">
                    <h3>Details:</h3>
                    <p>{product.description}</p>
                </div>
                <div className="additional-info">
                    <ul>
                        <li>30 Day Return Policy</li>
                        <li>Qualifies for free shipping (members only). Sign-up by entering your email below!</li>
                        <li>Send this product as a gift by selecting "Send as gift" during checkout</li>
                    </ul>
                    <div className="add-to-cart">
                        <button className="button" id={product.id} onClick={() => {addToCart(product)}}>Add to cart</button>
                    </div>
                </div>
            </div>


            
        </div>
    )
}