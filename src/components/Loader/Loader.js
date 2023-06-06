import newLoadingimg from "../../assets/newLoadingimg.gif"
import "./Loader.css"

export function Loader()
{
    return (<div className="loader-dimension flex-center">
       <img src={newLoadingimg} alt="loadingGif Image"/>
    </div>)
}