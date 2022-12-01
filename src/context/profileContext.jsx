import { createContext,useState } from "react";
export const ProfileContext = createContext({
    imageUrl:'',
    description:'',
    location:'',
    changeDescriptionValue:()=>{},
    changeImageUrlValue:()=>{},
    changeLocationValue:()=>{},
    addNewCart:false,
})
function ProfileProvider({children}){
    const [imageUrl,setImageUrl] = useState('');
    const [description,setDescription] = useState('');
    const [location ,setLocation] = useState('');
    const [addNewCart,setAddNewCart] = useState(false);
  

    function changeImageUrlValue(e){
        setImageUrl(e.target.value);
    }
    function changeDescriptionValue(e){
       setDescription(e.target.value);
    }
    function changeLocationValue(e){
        setLocation(e.target.value);
    }

    function addToProfileSection(){
        setAddNewCart(true);
    }
    const value = {imageUrl,description,location,changeDescriptionValue,changeImageUrlValue,changeLocationValue,addNewCart};
    return(
        <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
    )
}
export default ProfileProvider;