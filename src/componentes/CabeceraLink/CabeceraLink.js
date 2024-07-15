
import { Link } from "react-router-dom";
import style from "./CabeceraLink.module.css"


function CabeceraLink ({url,children}){

    return(
        <Link to = {url} className={style.Link}>{children}</Link>
    )
}


export default CabeceraLink;


