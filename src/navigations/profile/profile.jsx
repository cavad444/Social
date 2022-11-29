import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/user.context";
import './profile.css';
function Profile(){
    const {currentUser} = useContext(UserContext);
    return(

        <div className="profile-main-div">
            <img className="profile-image" src="/images/default-image.png" alt="" />
        </div>
    );
}
export default Profile;