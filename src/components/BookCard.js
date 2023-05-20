import { useContext } from "react"
import { ProductContext } from "../contexts/ProductProvider"
import {Link, useNavigate} from "react-router-dom";
import "./BookCard.css";

export function BookCard({bookObj})
{
    const {id,title,image,price,categoryName} = bookObj;
    const {bookState,dispatch} = useContext(ProductContext);
    const navigate = useNavigate();

    const bookStyle = {
        margin:"5px"
    }
    const handleAddtoCart = (bookObj)=>{
        alert("Product added to Cart");
        dispatch({type:"addToCart",payload:bookObj});
    }
    const checkBookinCart = (boodId)=>{
        return bookState.cartItems?.find(({id})=>id===boodId)?true:false;
    }
    const checkBookinWishList = (bookId)=>{
        return bookState.wishListItems?.find(({id})=>id===bookId)?true:false;
    }

    return(<div>
        <li className="bookStyle" style={bookStyle}>
        <div className="imgLike">
           
            <div className="likeButton">
                {!checkBookinWishList(id) && 
                <button onClick={()=>dispatch({type:"addToWishList",payload:bookObj})}>
                    <i class="material-symbols-outlined">favorite</i> 
                </button>}
                {checkBookinWishList(id) && 
                <button style={{color:"red"}} onClick={()=>dispatch({type:"removeFromWishList",payload:id})}>
                    <i class="red-fav material-icons-outlined">favorite</i>
                </button>}
            </div>
            <img height="200px" width="200px" src={image} alt={title}/>
        </div>
            <p>Title: {title}</p>
            <p>Price: {price}</p>
            <p>Category: {categoryName}</p>
            {checkBookinCart(id) && <button onClick={()=>navigate("/cart")}>Go to Cart</button>}
            {!checkBookinCart(id) &&<button onClick={()=>handleAddtoCart(bookObj)}>Add to Cart</button>}
           
        </li>

    </div>)
}