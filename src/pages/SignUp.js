import { useReducer } from "react"
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

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
    const [userState,reduceFun] = useReducer(signUpReducer,{
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    const sendData = {
        firstName: userState.firstName,
        lastName: userState.lastName,
        email: userState.email,
        password: userState.password
    }
    const signupHandler = async () => {
        try {
        const response =  await axios.post(`/api/auth/signup`,sendData);
          // saving the encodedToken in the localStorage
          localStorage.setItem("token", response.data.encodedToken);
          navigate(location?.state?.from?.pathname);
        } catch (error) {
          console.log(error);
        }
      };
    return (<div>

        <label>First Name</label>
        <input type="text" onChange={(event)=>reduceFun({type:"setFirstName",payload:event.target.value})} />
        <label>Last Name</label>
        <input type="text" onChange={(event)=>reduceFun({type:"setLastName",payload:event.target.value})}/>
        <label>Email</label>
        <input type="email" onChange={(event)=>reduceFun({type:"setEmail",payload:event.target.value})}/>
        <label>Password</label>
        <input type="password" onChange={(event)=>reduceFun({type:"setPassword",payload:event.target.value})} />
        
        <button onClick={signupHandler}>Sign up</button>
    </div>)
}