import { createContext, useState } from "react"

export const AuthContext = createContext();

export function AuthProvider({children})
{
    const localStorageUser =  JSON.parse(localStorage.getItem("user"));
   const [user,setUser] = useState(localStorageUser?.user);
  
   const [address,setAddress] = useState([]);
    return (<div>
        <AuthContext.Provider value={{user,setUser,address,setAddress}}>
            {children}
        </AuthContext.Provider>

    </div>)
}