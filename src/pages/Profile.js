import { useContext } from "react"
import { AuthContext } from ".."

export function Profile()
{
    const {user} = useContext(AuthContext);
    console.log(user);
    return (<div>
        This is profile page.
        <h1>{user?.email}</h1>

    </div>)
}