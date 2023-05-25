import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductProvider";
import { useNavigate, useParams } from "react-router-dom";
import "./IndividualProduct.css"
import { calcDiscountedPrice } from "../../backend/utils/discountPrics";
import { checkCart,checkWishList } from "../../backend/utils/checkBook";
import { handleAddtoCart } from "../../backend/utils/cartHandler";
import { handleAddtoWish } from "../../backend/utils/wishListHandler";

export function IndividualProduct()
{
    const {bookId} = useParams();
    const {bookState,dispatch} = useContext(ProductContext);
    const bookObj = bookState.displayBooks.find(({id})=>id===bookId);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();


    return (<div className="individualProduct">
        <div className="img-details">
            <img height="200px" width="200px" src={bookObj?.image} alt={bookObj?.title}/>
            <div>
                <h3>{bookObj?.title}</h3>
                
                <div id="star">
                    <p>{bookObj?.rating} </p>
                    <div id="stars">
                        <i class="yellow-fav material-icons-outlined">star</i>
                    </div>
                </div>
                <div id="price-detail">
                    <p id="finalPrice">{calcDiscountedPrice(bookObj?.price,bookObj?.discount)}</p>
                    <p id="orgPrice">{bookObj?.price}</p>
                    <p id="off">{bookObj?.discount}% OFF</p>
                </div>
                <p id="other-details">Author: <span>{bookObj?.author}</span></p>
                <p id="other-details">Category: <span>{bookObj?.categoryName}</span></p>
                <p id="other-details">Language: <span>English</span></p>
                {!checkCart(bookState.cartItems, bookObj?.id) ? 
                    <button id="cartStyle" onClick={()=>handleAddtoCart(bookObj,token,dispatch)}>Add to Cart</button>: 
                    <button id="cartStyle" onClick={()=>navigate("/cart")}>Go to Cart</button>
                }
                {
                    !checkWishList(bookState.wishListItems, bookObj?.id) ? 
                    <button id="wishListStyle" onClick={()=>handleAddtoWish(bookObj,token,dispatch)}>Add to WishList</button>:
                    <button id="wishListStyle" onClick={()=>navigate("/wishList")}>Go to WishList</button>
                }
               
            </div>
        </div>
    </div>)
}