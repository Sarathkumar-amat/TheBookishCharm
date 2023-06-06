import axios from "axios";
import { useContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Login.css"
import { ProductContext } from "../../contexts/ProductProvider";
function loginReducer(state,action)
{
    switch(action.type)
    {
        case "mail":
            return {...state,email:action.payload};
        case "password":
            return {...state,password:action.payload};
        case "setCred":
            return {...state,email:"test@gmail.com",password:"test@23"}
    }
}
export function Login()
{
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordType,setPasswordType]=useState("password");
    const {bookState,dispatch} = useContext(ProductContext);
    const {user,setUser,address,setAddress} = useContext(AuthContext);
    const [userState,reduceFun] = useReducer(loginReducer,{
        email:"",
        password:""
    })
    const testAddress = {
        id:uuid(),
        Name:"testUser",
        HouseNumber:"2/167 G",
        Area:"Ambedkar Nagar, Samathuvapuram",
        City: "Trichengode, Salem",
        PinCode: "Salem - 630006",
        State:"TamilNadu"
    }
    const handlePassword = ()=>{
        setPasswordType((previous)=>previous==="password"?"text":"password");
    }
    const testLoginHandler = ()=>{
        reduceFun({type:"setCred",payload:null})
        // const address = "2/167 G, Ambedkar Nagar, Samathuvapuram, Trichengode, Salem - 630006, TamilNadu"
        
        setAddress((data)=>[...data,{...testAddress}]);
        // reduceFun()
        // reduceFun({type:"password",payload:"test@23"})

    }
    const loginHandler = async(event)=>{
        event.preventDefault();
        try{
            const response = await axios.post(`/api/auth/login`,{
                email:userState.email,
                password:userState.password
            })
            if(response.status===200)
            {
                localStorage.setItem("user",  JSON.stringify({ user: response.data.foundUser }));
                setUser(response.data.foundUser);
                localStorage.setItem("token", response.data.encodedToken);
                (location?.state===null)?navigate("/bookListing"):navigate(location?.state?.from?.pathname);
                toast.success("Logged in successfully!", {
                    position: toast.POSITION.TOP_RIGHT
                  });
            }
        }
        catch(error){
            console.error(error);
        }
    }
    return (<div className="loginPage">
        <form className="LoginDetails" onSubmit={(event)=>loginHandler(event)}>
        <div className="email">
            <label>Email</label>
            <input placeholder="test@gmail.com" className="loginText" type="email" onChange={(event)=>reduceFun({type:"mail",payload:event.target.value})}/>
        </div>
        <div className="pwd">
            <label>Password</label>
            <div className="passwordContainer">
                <input placeholder="test@23" className="loginText" type={passwordType} onChange={(event)=>
                    reduceFun({type:"password",payload:event.target.value})} />
              {passwordType==="password" ? <i onClick={()=>handlePassword()} class="fa-solid fa-eye" id="eye"></i>
                :<i onClick={()=>handlePassword()} class="fa-solid fa-eye-slash" id="eye"></i>}
            </div>
        </div>
            <button className="signUpButton" onClick={testLoginHandler}>Login with test credentials</button>
            <button className="loginButton">Login</button>
            <div onClick={()=>navigate("/signUp")} className="doSignUp">
                Create New Account
            </div>
            
        </form>
    </div>)
}