import axios from "axios";
import { useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";


function loginReducer(state,action)
{
    switch(action.type)
    {
        case "mail":
            return {...state,email:action.payload};
        case "password":
            return {...state,password:action.payload};
    }
}
export function Login()
{
    const navigate = useNavigate();
    const location = useLocation();
    const {user,setUser} = useContext(AuthContext);
    const [userState,reduceFun] = useReducer(loginReducer,{
        email:"",
        password:""
    })
    const loginHandler = async()=>{
        try{
            const response = await axios.post(`/api/auth/login`,{
                email:userState.email,
                password:userState.password
            })
            console.log(response.data.foundUser);
            setUser(response.data.foundUser);
            localStorage.setItem("token", response.data.encodedToken);
            navigate(location?.state?.from?.pathname);
        }
        catch(error){
            console.error(error);
        }
    }
    return (<div>
        <label>Email</label>
        <input type="email" onChange={(event)=>reduceFun({type:"mail",payload:event.target.value})}/>
        <label>Password</label>
        <input type="password" onChange={(event)=>
            reduceFun({type:"password",payload:event.target.value})} />
        <button onClick={loginHandler}>Login with test credentials</button>
    </div>)
}