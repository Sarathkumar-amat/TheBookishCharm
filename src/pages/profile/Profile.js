import { useContext, useState } from "react"
import { AuthContext, ProductContext } from "../.."
import "./profile.css"
import { useNavigate } from "react-router-dom";
import { Address } from "./Address";

export function Profile()
{
    const [displayPage,setDisplayPage] = useState({profile:false,address:true});
    const {user,setUser,address} = useContext(AuthContext);
    const {bookState,dispatch} = useContext(ProductContext);
    const navigate = useNavigate();
    const handleSignout = ()=>{
        dispatch({type:"log_out",payload:null});
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser();
        navigate("/");

    }
    const profileAddressStyle = (value)=> ({
        background: displayPage[value]&&"black",
        color:displayPage[value]&&"white"
    })
    console.log(address);
    return (<div className="profilePage">
       
        <div className="profileCard">
        <div className="profileOrAddress">
            <button style={profileAddressStyle("profile")} onClick={()=>setDisplayPage((previous)=>({...previous,profile:true,address:false}))} 
            className="profileButton">Profile</button>
            <button style={profileAddressStyle("address")} onClick={()=>setDisplayPage((previous)=>({...previous,profile:false,address:true}))} 
            className="addressButton">Address</button>
        </div>
        {displayPage.profile && <div>
            <div>Profile Details</div>
            <div id="detail">
                <div id="title">Full Name: </div>
                <div id="name">{user?.firstName} {user?.lastName}</div>
            </div>
            <div id="detail">
                <div id="title">Email: </div>
                <div id="name">{user?.email}</div>
            </div>
            <div>
                <button onClick={handleSignout}>log out</button>
            </div>
        </div>}
            {/* <div>{bookState?.address}</div> */}
           <div>{address?.name}</div>
           
            {displayPage.address && <Address/>}
        </div>
        
    </div>)
}