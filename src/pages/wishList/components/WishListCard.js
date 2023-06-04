import { useContext } from "react";
import { removeFromWishList } from "../../../services/WishListServices";
import "./WishListCard.css";
import { ProductContext } from "../../../contexts/ProductProvider";
import { addToCart } from "../../../services/CartServices";
import { handleAddtoCart } from "../../../utils/cartHandler";
import { useNavigate } from "react-router-dom";

export function WishListCard({bookObj,cart,dispatch})
{
    const {id,_id,title,author,price,discount,image} = bookObj;
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    const checkInCart = (bookId)=>{
        return cart?.find(({id})=>id===bookId)?true:false;
    }
    const handleMovetoCart=(bookObj)=>{
        handleAddtoCart(bookObj,token,dispatch,navigate)
    }
    const handleRemoveWish = (id)=>{
        removeFromWishList(id,token,dispatch);
    }

    return (<div className="book-list">
        <div className="book-detail">
                <img src={image} height="150px" width="100px" alt={title} />
                <div className="otherDetails">
                    <p id="title">{title}</p>
                    <p id="author">{author}</p>
                    <div id="price-detail">
                        <p id="finalPrice">{price-price*(discount/100)}</p>
                        <p id="orgPrice">{price}</p>
                        <p id="off">({discount}% OFF)</p>
                    </div>
                </div>
               
        </div>   
        <button onClick={()=>handleRemoveWish(_id)}>Remove From WishList</button>
        {checkInCart(id)?<button>Already in Cart</button>:
        <button onClick={()=>handleMovetoCart(bookObj)}>Move to Cart</button>}
    </div>)
}
