import { useContext } from "react"
import { ProductContext } from "../contexts/ProductProvider"
import {Link, useNavigate} from "react-router-dom";
export function BookCard({bookObj})
{
    const {id,title,image,price,categoryName} = bookObj;
    const {bookState,dispatch} = useContext(ProductContext);
    const navigate = useNavigate();

    const bookStyle = {
        border:"1px solid black",
        margin:"5px"
    }
    const handleAddtoCart = (bookObj)=>{
        alert("Product added to Cart");
        dispatch({type:"addToCart",payload:bookObj});
    }
    const checkBookinCart = (boodId)=>{
        return bookState.cartItems?.find(({id})=>id===boodId)?true:false;
    }
    return(<div>
        <li style={bookStyle}>
            <img height="200px" width="200px" src={image} alt={title}/>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <p>Category: {categoryName}</p>
            {checkBookinCart(id) && <button onClick={()=>navigate("/cart")}>Go to Cart</button>}
            {!checkBookinCart(id) &&<button onClick={()=>handleAddtoCart(bookObj)}>Add to Cart</button>}
           
        </li>

    </div>)
}