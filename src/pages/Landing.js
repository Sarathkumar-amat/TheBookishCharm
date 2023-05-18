import { useContext, useEffect,useState } from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { ProductContext } from "../contexts/ProductProvider";

export function Landing()
{
    const {bookState,dispatch} = useContext(ProductContext);
    const navigate = useNavigate();
    const clickHandler = (category)=>{
        dispatch({type:"catFilter",payload:category})
        navigate("/bookListing");
    }
    return (<div>
        
        <h1>This is the Landing page</h1>
        <p>Please select one of the following category</p>
       <div> {bookState.categoryDetails?.map(({categoryName})=>
            <div>
               
                <button onClick={()=>clickHandler(categoryName)}>{categoryName}</button><br/>
            </div>
        
        )}</div>
        
    </div>)
}