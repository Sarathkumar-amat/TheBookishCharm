import { useContext } from "react"
import { ProductContext } from "../../../contexts/ProductProvider"
import { useNavigate} from "react-router-dom";
import "./BookCard.css";
import { checkCart, checkWishList } from "../../../utils/checkBook";
import { handleAddtoCart } from "../../../utils/cartHandler";
import { handleAddtoWish, handleRemoveFromWish } from "../../../utils/wishListHandler";
import { calcDiscountedPrice } from "../../../utils/discountPrics";

export function BookCard({bookObj})
{
    const {_id,id,title,image,price,categoryName,author,discount,rating} = bookObj;
    const {bookState,dispatch} = useContext(ProductContext);
    const token = localStorage.getItem("token")
    const navigate = useNavigate();

    const bookStyle = {
        margin:"20px"
    }

    return(<div>
        <li className="bookStyle" style={bookStyle}>
        <div className="imgLike">
           
            <img onClick={()=>navigate(`/bookList/book/${id}`)} height="200px" width="100%" src={image} alt={title}/>
            <div className="likeButton">
                {!checkWishList(bookState.wishListItems,id) && 
                <button onClick={()=>handleAddtoWish(bookObj,token,dispatch,navigate)}>
                    <i class="material-symbols-outlined">favorite</i> 
                </button>}
                {checkWishList(bookState.wishListItems,id) && 
                <button style={{color:"red"}} onClick={()=>handleRemoveFromWish(_id,token,dispatch)}>
                    <i class="red-fav material-icons-outlined">favorite</i>
                </button>}
            </div>
           
        </div>
        <div id="info-rating">
            <div>
                <p id="title">{title}</p>
                <p id="author">{author}</p>
            </div>
            <div id="star-block">
                <p>{rating} </p>
            <div id="star-icon">
            <i class="yellow-fav material-icons-outlined">star</i></div>
            </div>
        </div>
        <div id="price-detail">
            <p id="finalPrice">{calcDiscountedPrice(price,discount)}</p>
            <p id="orgPrice">{price}</p>
            <p id="off">({discount}% OFF)</p>
        </div>
            <p>from {categoryName}</p>
            {checkCart(bookState.cartItems,id) && <button onClick={()=>navigate("/cart")}>Go to Cart</button>}
            {!checkCart(bookState.cartItems,id) &&<button onClick={()=>handleAddtoCart(bookObj,token,dispatch,navigate)}>Add to Cart</button>}
           
        </li>

    </div>)
}