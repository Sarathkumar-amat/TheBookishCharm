import { useContext } from "react"
import { ProductContext } from "../contexts/ProductProvider"
import {Link} from "react-router-dom";
export function BookCard({bookObj})
{
    const {title,image,price,categoryName} = bookObj;

    const bookStyle = {
        border:"1px solid black",
        margin:"5px"
    }
    const handleAddtoCart = (bookObj)=>{
        alert("Product added to Cart");
        dispatch({type:"addToCart",payload:bookObj});
    }
    const {bookState,dispatch} = useContext(ProductContext);
    return(<div>
        <li style={bookStyle}>
            <img height="200px" width="200px" src={image} alt={title}/>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <p>Category: {categoryName}</p>
            <button onClick={()=>handleAddtoCart(bookObj)}>Add to Cart</button>
            <Link to="/cart">Go to Cart</Link>
           
        </li>

    </div>)
}