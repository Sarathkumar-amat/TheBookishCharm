// import { Toast } from "react-toastify/dist/components";
import { addToCart } from "../services/CartServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const handleAddtoCart = (bookObj,token,dispatch)=>{
    toast.success("Book added to Cart!", {
        position: toast.POSITION.TOP_RIGHT
      });
    addToCart(bookObj,token,dispatch);
}
