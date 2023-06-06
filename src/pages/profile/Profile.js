import { useContext, useState } from "react"
import { AuthContext, ProductContext } from "../.."
import "./profile.css"
import { useNavigate } from "react-router-dom";
import { Address } from "./Address";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Profile()
{
    const [displayPage,setDisplayPage] = useState({profile:false,address:true});
    const {user,setUser,address} = useContext(AuthContext);
    const {dispatch} = useContext(ProductContext);
    const navigate = useNavigate();
    const handleSignout = ()=>{
        dispatch({type:"log_out",payload:null});
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser();
        navigate("/");
        toast.warning("You have logged out!", {
            position: toast.POSITION.TOP_RIGHT
          });

    }
    const profileAddressStyle = (value)=> ({
        background: displayPage[value]&&"rgba(13, 133, 169, 0.957)",
        color:displayPage[value]&&"white",
        border: displayPage[value]&&"none"
    })
    // console.log(address);
    return (<div className="profilePage">
       
        <div className="profileCard">
        <div className="profileOrAddress">
            <button style={profileAddressStyle("profile")} onClick={()=>setDisplayPage((previous)=>({...previous,profile:true,address:false}))} 
            className="profileButton">Profile</button>
            <button style={profileAddressStyle("address")} onClick={()=>setDisplayPage((previous)=>({...previous,profile:false,address:true}))} 
            className="addressButton">Address</button>
        </div>
        {displayPage.profile && <div className="profilePart">
            <div className="pageHead">Profile Details</div>
            <div id="detail">
                <div id="title">Full Name: </div>
                <div id="name">{user?.firstName} {user?.lastName}</div>
            </div>
            <div id="detail">
                <div id="title">Email: </div>
                <div id="name">{user?.email}</div>
            </div>
            <div>
                <button className="logout" onClick={handleSignout}>log out</button>
            </div>
        </div>}
            {/* <div>{bookState?.address}</div> */}
           <div>{address?.name}</div>
           
            {displayPage.address && <Address/>}
        </div>
        
    </div>)
}