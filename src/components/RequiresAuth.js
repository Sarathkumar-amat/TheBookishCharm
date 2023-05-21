import { useLocation } from "react-router-dom";

export default function RequiresAuth({children,isLoggedin})
{
    const location = useLocation();

    return (<div>{isLoggedin?children:<Navigate to="/login" state={{from:location}}/>}</div>)
}