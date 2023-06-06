import { useContext } from "react";
// import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { ProductContext } from "../../contexts/ProductProvider";
import "./Landing.css"
import { AuthContext } from "../../contexts/AuthProvider";
import { Footer } from "../../components/footer/Footer";

export function Landing()
{
    const {bookState,dispatch} = useContext(ProductContext);
    // const {setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const clickHandler = (category)=>{
        dispatch({type:"catFilter",payload:{currentCat:category,page:"landing"}})
        navigate("/bookListing");
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
                    <p>Turning Pages, Shaping Lives: Discover the Power of Books </p>
                        <button onClick={()=>navigate("/bookListing")} className="exploreButton">Explore Now</button>    
                        {/* <Link to="/bookListing" id="bookRoute">reading more...</Link></p> */}
                </div>
            </div>
            <div className="coverBack"></div>
        </div>
        <p className="welcome-text">Please select from one of the available book categories</p>
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