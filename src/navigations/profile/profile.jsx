import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { UserContext } from "../../context/user.context";
import { ProfileContext } from "../../context/profileContext";
import './profile.css';
function Profile(){
    const {imageUrl,description,location,changeImageUrlValue,changeDescriptionValue,changeLocationValue} = useContext(ProfileContext);
    const {currentUser} = useContext(UserContext);
    return(
        <div>
            <h1 className="profile-main-text">Hi {currentUser}</h1>
        <div className="profile-main-div">
            <img className="profile-image" src={imageUrl!==''? imageUrl: "/images/default-image.png"} alt="" />
            <div className="profile-form-input">
                <form className="profile-form">
                    <div className="profile-span-input-div">
                        <span className="profile-input-text">Enter image url</span>
                        <input value={imageUrl} onChange={(e)=>{changeImageUrlValue(e)}} required placeholder="exp: /images/...." className="profile-input" type="text" name="" id="" />
                    </div>
                    <div className="profile-span-input-div">
                        <span className="profile-input-text">Enter description</span>
                        <input value={description} onChange={(e)=>{changeDescriptionValue(e)}} required placeholder="How you feel today..." className="profile-input" type="text" name="" id="" />
                    </div>
                    <div className="profile-span-input-div">
                        <span className="profile-input-text">Enter location</span>
                        <input value={location} onChange={(e)=>{changeLocationValue(e)}} required placeholder="exp: Baku/Azerbaijan..." className="profile-input" type="text" name="" id="" />
                    </div>
                    <input type="submit" value="Add" className="profile-add-button" />
                </form>
            </div>
        </div>
        
        </div>
    );
}
export default Profile;