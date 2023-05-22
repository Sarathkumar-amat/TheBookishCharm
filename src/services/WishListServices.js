import axios from "axios";


export const addToWishList = async(token,dispatch,product)=>{
    try{
        const {data:{wishlist}} = await axios.post("/api/user/wishlist",
        {product},
        {
            headers:{
                authorization:token
            },
        })
        dispatch({type:"addToWishList",payload:wishlist});
    }
    catch(error)
    {
        console.error(error);
    }

}
export const removeFromWishList = async(id,token,dispatch)=>{
        try{
            const {data:{wishlist}} = await axios.delete(`/api/user/wishlist/${id}`,
                                        {
                                            headers:{
                                                authorization:token
                                            }
                                        }
                                        )
            console.log(wishlist);
            dispatch({type:"removeFromWishList",payload:wishlist})
        }
        catch(error){
            console.log(error)
        }
}