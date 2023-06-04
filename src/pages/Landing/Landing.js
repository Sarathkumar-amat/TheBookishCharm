import { useContext, useEffect,useState } from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { ProductContext } from "../../contexts/ProductProvider";
import "./Landing.css"
import { AuthContext } from "../../contexts/AuthProvider";
import { Footer } from "../../components/footer/Footer";

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
        
        {/* <Link to="/signUp">Sign Up</Link>
        <button onClick={handleSignout}>Sign out</button>
        <Link to="/login">Login</Link> */}
        <div className="coverPage">
            <div className="coverImg">
                <img src="https://i.pinimg.com/564x/3d/60/87/3d60879f72ee9b714cbcb010cf70abf4.jpg" alt="landing"/>
            </div>
            <div className="hd">
                <div className="textArea">
                    <p id="heading">TheBookishCharm</p>
                    <p>Fire your neurons by <Link to="/bookListing" id="bookRoute">reading more...</Link></p>
                </div>
            </div>
            <div className="coverBack"></div>
        </div>
        <p className="welcome-text">Please select one of the available book categories</p>
       <div className="category-div"> {bookState.categoryDetails?.map(({_id,categoryName,description})=>
            <div key={_id} onClick={()=>clickHandler(categoryName)} className="category-style">
                <h2>{categoryName}</h2><br/>
                <p>{description}</p>
            </div>
       
        
        )}</div>
        <footer>
          <Footer />
        </footer>
    </div>)
}