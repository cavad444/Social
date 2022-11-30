import { createContext,useState } from "react";
export const ProfileContext = createContext({
    imageUrl:'',
    description:'',
    location:'',
    changeDescriptionValue:()=>{},
    changeImageUrlValue:()=>{},
    changeLocationValue:()=>{},
})
function ProfileProvider({children}){
    const [imageUrl,setImageUrl] = useState('');
    const [description,setDescription] = useState('');
    const [location ,setLocation] = useState('');
    function changeImageUrlValue(e){
        setImageUrl(e.target.value);
    }
    function changeDescriptionValue(e){
       setDescription(e.target.value);
    }
    function changeLocationValue(e){
        setLocation(e.target.value);
    }
    const value = {imageUrl,description,location,changeDescriptionValue,changeImageUrlValue,changeLocationValue};
    return(
        <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
    )
}
export default ProfileProvider;