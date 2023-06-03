import { toast } from "react-toastify";
import { addToWishList, removeFromWishList } from "../services/WishListServices";

export const handleAddtoWish = (bookObj,token,dispatch,navigate)=>{

    if(token)
    {
        toast.success("Book added to Wishlist",{
            position:toast.POSITION.TOP_RIGHT
        })
        addToWishList(token,dispatch,bookObj);
    }
    else{
        navigate("/login");
    }
}
export const handleRemoveFromWish = (bookId,token,dispatch)=>{
    toast.warning("Book removed from wishList",{
        position:toast.POSITION.TOP_RIGHT
    })
    removeFromWishList(bookId,token,dispatch);
}