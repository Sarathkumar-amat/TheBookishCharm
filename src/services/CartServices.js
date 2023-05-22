import axios from "axios"


export const addToCart = async (product,token,dispatch)=>{
    try{
        console.log(product);
        const response = await axios.post("/api/user/cart",{product,},
                            {
                                headers:{
                                authorization: token,
                                }
                            }
                            )
        console.log(response.data);
        console.log(response.data.cart[4]);
        //  dispatch({type:"addToCart",payload:response.})                   
    }
    catch(error)
    {
        console.log("Error in addToCart service", error);
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