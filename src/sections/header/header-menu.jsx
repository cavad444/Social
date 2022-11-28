import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse,faMagnifyingGlass,faCompass,faRightToBracket,faMessage,faHeart,faSquarePlus,faUser,faListUl} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function HeaderMenu(){
    return(
        <section className="menu-section">
                <ul className='menu-section-ul'>
                    <li className='header-section-1-li'><img className="instagram-logo" src="/images/instagram-logo.png" alt="" /></li>
                    <li className='header-section-1-li'><FontAwesomeIcon className='header-icon' icon={faHouse} /> <Link className='menu-links' to='/'>Home</Link></li>
                    <li className='header-section-1-li'><FontAwesomeIcon className='header-icon' icon={faMagnifyingGlass} />  Search</li>
                    <li className='header-section-1-li'><FontAwesomeIcon className='header-icon' icon={faCompass} />  Explore</li>
                    <li className='header-section-1-li'><FontAwesomeIcon className='header-icon' icon={faRightToBracket} />  <Link to='/login' className='menu-links'>  Login</Link></li>
                    <li className='header-section-1-li'><FontAwesomeIcon className='header-icon message-icon' icon={faMessage} />  Messages</li>
                    <li className='header-section-1-li'><FontAwesomeIcon className='header-icon message-icon' icon={faHeart} />  Notification</li>
                    <li className='header-section-1-li'><FontAwesomeIcon className='header-icon message-icon' icon={faSquarePlus} />  Create</li>
                    <li className='header-section-1-li'><FontAwesomeIcon className='header-icon message-icon' icon={faUser} />  Profile</li>
                    <li className='header-section-1-li'><FontAwesomeIcon className='header-icon message-icon' icon={faListUl} />  More</li>
                </ul>
            </section>
    );
}
export default HeaderMenu;