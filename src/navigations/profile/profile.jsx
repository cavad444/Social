import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/user.context";
import './profile.css';
function Profile(){
    const {currentUser} = useContext(UserContext);
    return(
        <div>
            <h1 className="profile-main-text">Hi {currentUser}</h1>
        <div className="profile-main-div">
            <img className="profile-image" src="/images/default-image.png" alt="" />
            <div className="profile-form-input">
                <form className="profile-form">
                    <div className="profile-span-input-div">
                        <span className="profile-input-text">Enter image url</span>
                        <input placeholder="exp: /images/...." className="profile-input" type="text" name="" id="" />
                    </div>
                    <div className="profile-span-input-div">
                        <span className="profile-input-text">Enter description</span>
                        <input placeholder="How you feel today..." className="profile-input" type="text" name="" id="" />
                    </div>
                    <div className="profile-span-input-div">
                        <span className="profile-input-text">Enter location</span>
                        <input placeholder="exp: Baku/Azerbaijan..." className="profile-input" type="text" name="" id="" />
                    </div>
                    <input type="submit" value="Submit" className="profile-add-button" />
                </form>
            </div>
        </div>
        
        </div>
    );
}
export default Profile;