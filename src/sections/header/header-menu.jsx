import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {faHouse,faMagnifyingGlass,faCompass,faRightToBracket,faMessage,faHeart,faSquarePlus,faUser,faBars,faGear,faBookmark} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {signOutUser} from '../../firebase/firebase-config';
function HeaderMenu(){
    const [isCartOpen,setIsCartOpen] = useState(false);
    function toggleCart(){
        setIsCartOpen(!isCartOpen);
    }
 
    
    return(
        <section className="menu-section">
            <div className={'absolute' + (isCartOpen ? 'open-cart' : '')}>
            <div className='more-cart'>
        <ul className='more-cart-ul'>
            <li className="more-cart-li"><Link className='more-cart-link'>Saved</Link><FontAwesomeIcon className='header-icon message-icon hover-gray' icon={faBookmark} /></li>
            <hr />
            <li className="more-cart-li"><Link className='more-cart-link'>Settings</Link><FontAwesomeIcon className='header-icon message-icon hover-gray' icon={faGear} /></li>
        </ul>
        <ul className='more-cart-ul'>
            <li className='more-cart-li'><Link onClick={signOutUser} className='more-cart-link'>Sign out</Link></li>
        </ul>
        </div>
    </div>  
                <ul className='menu-section-ul'>
                    <li className='header-section-1-li'><img className="instagram-logo" src="/images/instagram-logo.png" alt="" /></li>
                    <li className='header-section-1-li hover-gray'><FontAwesomeIcon className='header-icon hover-gray' icon={faHouse} /> <Link className='menu-links hover-gray' to='/'>Home</Link></li>
                    <li className='header-section-1-li hover-gray'><FontAwesomeIcon className='header-icon hover-gray' icon={faMagnifyingGlass} />  Search</li>
                    <li className='header-section-1-li hover-gray'><FontAwesomeIcon className='header-icon hover-gray' icon={faCompass} />  Explore</li>
                    <li className='header-section-1-li hover-gray'><FontAwesomeIcon className='header-icon hover-gray' icon={faRightToBracket} />  <Link to='/login' className='menu-links hover-gray'>  Login</Link></li>
                    <li className='header-section-1-li hover-gray'><FontAwesomeIcon className='header-icon message-icon hover-gray' icon={faMessage} />  Messages</li>
                    <li className='header-section-1-li hover-gray'><FontAwesomeIcon className='header-icon message-icon hover-gray' icon={faHeart} />  Notification</li>
                    <li className='header-section-1-li hover-gray'><FontAwesomeIcon className='header-icon message-icon hover-gray' icon={faSquarePlus} />  Create</li>
                    <li className='header-section-1-li hover-gray'><FontAwesomeIcon className='header-icon message-icon hover-gray' icon={faUser} />  <Link to='/profile' className='menu-links hover-gray'>  Profile</Link></li>
                    {/* <li className={'header-section-1-li absolute' + (isCartOpen ? 'open-cart':'')}>
                        <div className={'more-cart'}>
                            <ul className='more-cart-ul'>
                                <li className="more-cart-li"><Link className='more-cart-link'>Saved</Link><FontAwesomeIcon className='header-icon message-icon hover-gray' icon={faBookmark} /></li>
                                <hr />
                                <li className="more-cart-li"><Link className='more-cart-link'>Settings</Link><FontAwesomeIcon className='header-icon message-icon hover-gray' icon={faGear} /></li>
                            </ul>
                            <ul className='more-cart-ul'>
                                <li className='more-cart-li'><Link className='more-cart-link'>Sign out</Link></li>
                            </ul>
                        </div>
                    </li> */}
                    <li onClick={toggleCart}  className='header-section-1-li hover-gray'><FontAwesomeIcon className='header-icon message-icon' icon={faBars} />  More</li>
                </ul>
            </section>
    );
}
export default HeaderMenu;