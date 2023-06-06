import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductProvider";
import { useNavigate, useParams } from "react-router-dom";
import "./IndividualProduct.css"
import { calcDiscountedPrice } from "../../utils/discountPrics";
import { checkCart,checkWishList } from "../../utils/checkBook";
import { handleAddtoCart } from "../../utils/cartHandler";
import { handleAddtoWish } from "../../utils/wishListHandler";

export function IndividualProduct()
{
    const {bookId} = useParams();
    const {bookState,dispatch,setLoader} = useContext(ProductContext);
    const bookObj = bookState.displayBooks.find(({id})=>id===bookId);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    if( bookState.displayBooks.length===0)
    {
        setLoader(true);
        return <></>
    }
    else{
        setLoader(false);
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
                    <button className="indCart" id="cartStyle" onClick={()=>handleAddtoCart(bookObj,token,dispatch,navigate)}>Add to Cart</button>: 
                    <button className="indCart" id="cartStyle" onClick={()=>navigate("/cart")}>Go to Cart</button>
                }
                {
                    !checkWishList(bookState.wishListItems, bookObj?.id) ? 
                    <button className="indWish" id="wishListStyle" onClick={()=>handleAddtoWish(bookObj,token,dispatch,navigate)}>Add to WishList</button>:
                    <button className="indWish" id="wishListStyle" onClick={()=>navigate("/wishList")}>Go to WishList</button>
                }
               
            </div>
        </div>
    </div>)
}
}