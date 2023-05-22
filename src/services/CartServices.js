import axios from "axios"


export const addToCart = async (product,token,dispatch)=>{
    try{
        console.log(product);
        const {data:{cart}} = await axios.post("/api/user/cart",{product,},
                            {
                                headers:{
                                authorization: token,
                                }
                            }
                            )
        console.log(cart);
         dispatch({type:"addToCart",payload:cart})                   
    }
    catch(error)
    {
        console.log("Error in addToCart service", error);
    }
   
}


export const removeFromCart = async (id,token,dispatch)=>{
    try{
        const {data:{cart}} = await axios.delete(`api/user/cart/${id}`,
                            {
                                headers:{
                                authorization: token,
                                }
                            }
                            )
        console.log(cart);
         dispatch({type:"removeFromCart",payload:cart})                   
    }
    catch(error)
    {
        console.log("Error in addToCart service", error);
    }
   
}
export const updatedQuantityinCart = async(id,dispatch,token,updateType)=>
{
    try{
        const {data:{cart}} = await axios.post(`api/user/cart/${id}`,{
            action:{
                type:updateType==="+"?"increment":"decrement",
            },
            
        },
        {
            headers:{
            authorization:token
        },
    }
        )
        dispatch({type:"increaseQuantity",payload:cart});
    }
    catch(error){
        console.log(error);
    }
}
// export const removeFromCart = async () =>
// {
//     try{
//         const response = await axios.post("/api/user/cart",{product,},
//         {
//             headers:{
//             authorization: token,
//             }
//         }
//         )
//     }
//     catch(error)
//     {
//         console.log("Error in addToCart service", error);
//     }
// }