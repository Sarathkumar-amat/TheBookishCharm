import { useContext, useReducer, useState } from "react"
import axios from "axios";
import { useLocation, useNavigate,Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import "./Signup.css"


function signUpReducer(state,action)
{
    switch(action.type)
    {
        case "setFirstName":
            return {...state,firstName:action.payload};
        case "setLastName":
            return {...state,lastName:action.payload};
        case "setEmail":
            return {...state,email:action.payload};
        case "setPassword":
            return {...state,password:action.payload};
    }
}

export function SignUp()
{
    const navigate = useNavigate();
    const location = useLocation();
    const {user,setUser} = useContext(AuthContext);
    const [userState,reduceFun] = useReducer(signUpReducer,{
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    const sendData = {
        email: userState.email,
        password: userState.password,
        firstName: userState.firstName,
        lastName: userState.lastName,
        
    }

    const signupHandler = async (e) => {
        e.preventDefault();
        try {
        const response =  await axios.post(`/api/auth/signup`,{...sendData});
          // saving the encodedToken in the localStorage;
          if(response.status===201)
          {
            console.log(typeof(response.data.createdUser.email));
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem("user",  JSON.stringify({ user: response.data.createdUser }));
            
            setUser(response.data.createdUser);
            navigate("/bookListing");
            // console.log(loginState.user);
            // navigate(location?.state?.from?.pathname);
          }
        } catch (error) {
          console.log(error);
        }
      };
    return (<div className="createAccountDetail">
        <form className="signUpForm" onSubmit={(event)=>signupHandler(event)}>
            <div className="name">
                <div className="firstName">
                    <label for="firstNameInp">First Name</label>
                    <input className="firstnameInp" type="text" onChange={(event)=>reduceFun({type:"setFirstName",payload:event.target.value})} />
                </div>
                <div className="lastName">
                    <label for="lastNameInp">Last Name</label>
                    <input className="lastNameInp" type="text" onChange={(event)=>reduceFun({type:"setLastName",payload:event.target.value})}/>
                </div>
            </div>
            <label>Email</label>
            <input type="email" onChange={(event)=>reduceFun({type:"setEmail",payload:event.target.value})}/>
            <label>Password</label>
            <input type="password" onChange={(event)=>reduceFun({type:"setPassword",payload:event.target.value})} />
            
            <button>Sign up</button>
        </form>
        <Link to="/profile">goto Profile</Link>
    </div>)
}