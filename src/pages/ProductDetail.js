import { useParams } from "react-router-dom";
import { products } from "../util/products";


export default function ProductDetail(props) {
    const {products} = props;
    let { name } = useParams();

    let product = products.find(product => name === product.name)

    return(
        <div className="product-container">
            <h1>{name}</h1>
            <h2>HELLLLOOOOOO!!!</h2>
            <div><img src={product.img} alt="" /></div>
        </div>
    )
}