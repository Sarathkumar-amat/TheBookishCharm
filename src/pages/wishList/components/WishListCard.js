import { removeFromWishList } from "../../../services/WishListServices";
import "./WishListCard.css";

export function WishListCard({bookObj,cart,dispatch})
{
    const {id,_id,title,author,price,discount,image} = bookObj;
    const token = localStorage.getItem("token");

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
    </div>)
}
