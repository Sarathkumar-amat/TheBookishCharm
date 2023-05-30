import { useContext, useEffect,useState } from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { ProductContext } from "../../contexts/ProductProvider";
import "./Landing.css"
import { AuthContext } from "../../contexts/AuthProvider";

export function Landing()
{
    const {bookState,dispatch} = useContext(ProductContext);
    const {user,setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const clickHandler = (category)=>{
        dispatch({type:"catFilter",payload:category})
        navigate("/bookListing");
    }
    const handleSignout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser();
    }
    return (<div>
        
        <Link to="/signUp">Sign Up</Link>
        <button onClick={handleSignout}>Sign out</button>
        <Link to="/login">Login</Link>
        
        <p className="welcome-text">Please select one of the available book categories</p>
       <div className="category-div"> {bookState.categoryDetails?.map(({categoryName,description})=>
            <div  onClick={()=>clickHandler(categoryName)} className="category-style">
                <h2>{categoryName}</h2><br/>
                <p>{description}</p>
            </div>
        
        )}</div>
        
    </div>)
}