import './header.css';
import HeaderMenu from './header-menu';
import HeaderMiddle from './header-middle';
import HeaderFollow from './header-folow'; 
function Header(){
    return(
        <div className="header-main-div">
            <HeaderMenu/>
            <HeaderMiddle/>
            <HeaderFollow/>
        </div>
    );
}
export default Header;