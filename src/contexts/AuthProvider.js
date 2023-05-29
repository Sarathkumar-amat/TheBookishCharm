import { createContext, useState } from "react"

export const AuthContext = createContext();

export function AuthProvider({children})
{
    const localStorageUser =  JSON.parse(localStorage.getItem("user"));
   const [user,setUser] = useState(localStorageUser?.user);
   console.log(user)
    return (<div>
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>

    </div>)
}