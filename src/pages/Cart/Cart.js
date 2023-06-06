import { useContext } from "react"
import { ProductContext } from "../../contexts/ProductProvider"
import { CheckOutCard } from "../../components/CheckOutCard";
import "./Cart.css";
import { removeFromCart, updatedQuantityinCart } from "../../services/CartServices";
import { toast } from "react-toastify";
import { checkWishList } from "../../utils/checkBook";
// import { handleAddtoWish } from "../../utils/wishListHandler";
// import { handleRemoveFromWish } from "../../utils/wishListHandler";
import { addToWishList } from "../../services/WishListServices";
import { useNavigate } from "react-router-dom";

export function Cart()
{
    const {bookState,dispatch} = useContext(ProductContext);
    const itemsToDisplay = bookState?.cartItems;
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const handleRemoveFromCrt = (id)=>{
        toast.warning("Book Removed from cart!",{
            position:toast.POSITION_TOP_RIGHT
        })
        removeFromCart(id,token,dispatch);
    }
    const handleWishAdd = (bookId)=>{
        toast.success("Book Added to wishList!",{
            position:toast.POSITION_TOP_RIGHT
        })
        const bookObj = itemsToDisplay.find(({id})=>id===bookId);
        addToWishList(token,dispatch,bookObj)
    }
    const modifyQty = (id,type)=>
    {
        updatedQuantityinCart(id,dispatch,token,type)
    }

    return (<div className="cart-container">
        
       {itemsToDisplay.length>0 && <div>
        <h3 className="cartHeading">My Cart ({itemsToDisplay.length} items)</h3>
        <ul className="cart-list">{itemsToDisplay?.map(({_id,id,title,image,qty,price,author,discount})=>
        <li className="cartItem" key={_id}>
            <div className="prod-details">
                <img src={image} height="150px" width="100px" alt={title} />
                <div className="otherDetails">
                    <p id="title">{title}</p>
                    <p id="author">{author}</p>
                    <div id="price-detail">
                        <p id="finalPrice">{price-price*(discount/100)}</p>
                        <p id="orgPrice">{price}</p>
                        <p id="off">({discount}% OFF)</p>
                    </div>
                    <div className="qty-reduce">
                        <button className="add" onClick={()=>modifyQty(_id,"+")}>+</button>
                        <div id="qty">{qty}</div>
                        <button style={{background:qty<=1&&"grey"}} disabled={qty<=1} className="remove" onClick={()=>modifyQty(_id,"-")}>-</button>
                    </div>
                </div>
        </div>
        <div className="allButtons">
            <button className="removeButton" onClick={()=>handleRemoveFromCrt(_id)}>Remove from Cart</button>
            {!checkWishList(bookState.wishListItems,id) && <button className="addWishbutton" 
            onClick={()=>handleWishAdd(id)}>
                Add to WishList
            </button>}
            {checkWishList(bookState.wishListItems,id) && <button onClick={()=>navigate("/wishList")} className="addWishbutton">
                Already in WishList
            </button>}
        </div>
       
        </li>
        
        )}</ul> </div>}
        {itemsToDisplay?.length>0 &&  <CheckOutCard allCartitems={itemsToDisplay} />}
        {itemsToDisplay?.length<=0 && 
        <div className="cartText">
            <h1>No items in Cart! ☹️</h1>
        </div>
        }
        </div>)
}