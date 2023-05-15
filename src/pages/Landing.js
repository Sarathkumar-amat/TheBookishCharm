import { useEffect,useState } from "react";
import {Link} from "react-router-dom";

export function Landing()
{
    return (<div>
        <h1>This is the Landing page</h1>
        <p>Please select one of the following category</p>
        <Link to="bookListing">Horror</Link><br/>
        <Link to="">Fiction</Link><br/>
        <Link to="">Non-fiction</Link>
    </div>)
}