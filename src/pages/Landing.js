import { useContext, useEffect,useState } from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { ProductContext } from "../contexts/ProductProvider";
import "./Landing.css"

export function Landing()
{
    const {bookState,dispatch} = useContext(ProductContext);
    const navigate = useNavigate();
    const clickHandler = (category)=>{
        dispatch({type:"catFilter",payload:category})
        navigate("/bookListing");
    }
    return (<div>
        
       
        <p className="welcome-text">Please select one of the available book categories</p>
       <div className="category-div"> {bookState.categoryDetails?.map(({categoryName,description})=>
            <div  onClick={()=>clickHandler(categoryName)} className="category-style">
                <h2>{categoryName}</h2><br/>
                <p>{description}</p>
            </div>
        
        )}</div>
        
    </div>)
}