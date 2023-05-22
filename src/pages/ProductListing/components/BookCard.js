import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductProvider"
import {Link, useNavigate} from "react-router-dom";
import "./BookCard.css";
import { addToCart } from "../../../services/CartServices";
import { addToWishList, removeFromWishList } from "../../../services/WishListServices";

export function BookCard({bookObj})
{
    const {_id,id,title,image,price,categoryName,author,discount,rating} = bookObj;
    const {bookState,dispatch} = useContext(ProductContext);
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    const bookStyle = {
        margin:"20px"
    }
    const handleAddtoCart = (bookObj)=>{
        alert("Product added to Cart");
        addToCart(bookObj,token,dispatch);
    }
    const checkBookinCart = (boodId)=>{
        return bookState.cartItems?.find(({id})=>id===boodId)?true:false;
    }
    const handleAddtoWish = (bookObj)=>{
        addToWishList(token,dispatch,bookObj);
    }
    const handleRemoveFromWish = (bookId)=>{
        removeFromWishList(bookId,token,dispatch);
    }
    const checkBookinWishList = (bookId)=>{
        return bookState.wishListItems?.find(({id})=>id===bookId)?true:false;
    }

    return(<div>
        <li className="bookStyle" style={bookStyle}>
        <div className="imgLike">
           
            <div className="likeButton">
                {!checkBookinWishList(id) && 
                <button onClick={()=>handleAddtoWish(bookObj)}>
                    <i class="material-symbols-outlined">favorite</i> 
                </button>}
                {checkBookinWishList(id) && 
                <button style={{color:"red"}} onClick={()=>handleRemoveFromWish(_id)}>
                    <i class="red-fav material-icons-outlined">favorite</i>
                </button>}
            </div>
            <img height="200px" width="100%" src={image} alt={title}/>
        </div>
        <div id="info-rating">
            <div>
                <p id="title">{title}</p>
                <p id="author">{author}</p>
            </div>
            <div id="star">
                <p>{rating} </p>
            <div id="stars"><i class="yellow-fav material-icons-outlined">star</i></div>
            </div>
        </div>
        <div id="price-detail">
            <p id="finalPrice">{price-price*(discount/100)}</p>
            <p id="orgPrice">{price}</p>
            <p id="off">({discount}% OFF)</p>
        </div>
            <p>from {categoryName}</p>
            {checkBookinCart(id) && <button onClick={()=>navigate("/cart")}>Go to Cart</button>}
            {!checkBookinCart(id) &&<button onClick={()=>handleAddtoCart(bookObj)}>Add to Cart</button>}
           
        </li>

    </div>)
}