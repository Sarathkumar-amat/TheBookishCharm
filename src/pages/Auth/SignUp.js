import { useContext, useReducer, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
        case "setConfirmPassword":
            return {...state,confirmPassword:action.payload}
        default:
            console.log("something went wrong");
            return {...state}
    }
}

export function SignUp()
{
    const navigate = useNavigate();
    const [passwordType,setPasswordType] = useState("password");
    // const location = useLocation();
    const {setUser} = useContext(AuthContext);
    const [userState,reduceFun] = useReducer(signUpReducer,{
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const sendData = {
        email: userState.email,
        password: userState.password,
        firstName: userState.firstName,
        lastName: userState.lastName,
        
    }
    const handlePassword = ()=>{
        setPasswordType((previous)=>previous==="password"?"text":"password");
    }
    const signupHandler = async (e) => {
        e.preventDefault();
        if(userState.password!==userState.confirmPassword){
            alert("Passwords don't match");
        }
        else{
            try {
                const response =  await axios.post(`/api/auth/signup`,{...sendData});
                // saving the encodedToken in the localStorage;
                if(response.status===201)
                {
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
        }
      };
    return (<div className="createAccountDetail">
        <form className="signUpForm" onSubmit={(event)=>signupHandler(event)}>
            <div className="name">
                <div className="firstName">
                    <label htmlFor="firstNameInp">First Name</label>
                    <input required className="firstnameInp" type="text" onChange={(event)=>reduceFun({type:"setFirstName",payload:event.target.value})} />
                </div>
                <div className="lastName">
                    <label htmlFor="lastNameInp">Last Name</label>
                    <input required className="lastNameInp" type="text" onChange={(event)=>reduceFun({type:"setLastName",payload:event.target.value})}/>
                </div>
            </div>
            <div className="email">
                <label>Email</label>
                <input required type="email" onChange={(event)=>reduceFun({type:"setEmail",payload:event.target.value})}/>
            </div>
            <div className="pwd">
                <label>Password</label>
                <div className="pwdContainer">
                    <input required type={passwordType} onChange={(event)=>reduceFun({type:"setPassword",payload:event.target.value})} />
                    {passwordType==="password" ? <i onClick={()=>handlePassword()} class="fa-solid fa-eye" id="eye"></i>
                        :<i onClick={()=>handlePassword()} class="fa-solid fa-eye-slash" id="eye"></i>}
                </div>
            </div>
            <div className="confPwd">
                <label>Confirm Password</label>
                <div className="pwdContainer">
                    <input required type={passwordType} onChange={(event)=>
                        reduceFun({type:"setConfirmPassword",payload:event.target.value})} />
                    {passwordType==="password" ? <i onClick={()=>handlePassword()} class="fa-solid fa-eye" id="eye"></i>
                            :<i onClick={()=>handlePassword()} class="fa-solid fa-eye-slash" id="eye"></i>}
                </div>
            </div>
            <button className="signUpButton">Sign up</button>
        </form>
    </div>)
}