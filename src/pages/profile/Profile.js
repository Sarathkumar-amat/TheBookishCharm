import { useContext } from "react"
import { AuthContext, ProductContext } from "../.."
import "./profile.css"
import { useNavigate } from "react-router-dom";

export function Profile()
{
    const {user,setUser} = useContext(AuthContext);
    const {bookState,dispatch} = useContext(ProductContext);
    const navigate = useNavigate();
    const handleSignout = ()=>{
        dispatch({type:"log_out",payload:null});
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser();
        navigate("/");

    }
    console.log(user);
    return (<div className="profilePage">
        <div className="profileCard">
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
        </div>
    </div>)
}