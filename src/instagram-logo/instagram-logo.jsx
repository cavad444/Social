import { Outlet, Link } from "react-router-dom";
import './instagram-logo.css';
function InstagramLogo(){
    return(
        <div className="instagram-logo-main">
            <Link className="instagram-logo-link" to='/'><img className="instagram-logo-image" src="/images/instagram-logo.png" alt="" /></Link>
            <Outlet/>
        </div>
    );
}
export default InstagramLogo;