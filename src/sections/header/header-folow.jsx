import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
function HeaderFollow(){
    const {currentUser} = useContext(UserContext);
    return(
        <section className="header-follow-section">
         <div className="switch-section-div">
            
            <div className="switch-accounts-img-text">
                <img className="right-section-pp" src="/images/pp.jpg" alt="" />
                <div className="follow-section-texts">
                <span className="cart-username">{currentUser}</span>
                <p className="cart-fullname">Cavad Manafov</p>
                </div>
            </div>
            <div className="switch-button-part">
                {/* <Link className="switch-button" to='/salam'></Link> */}
                <div className="salam">
                <a className="follow-section-link" href="salam.com">Switch</a>
                </div>
            </div>
        </div>
        {/* switch section div endis */}
        <article className="follow-section-suggestions-text">
            <span>Suggestions For You</span>
            <p>See All</p>
        </article>
        <div className="follow-section-last-part">


        <div className="switch-section-div">
            <div className="switch-accounts-img-text">
                <img className="right-section-last-pp" src="/images/pp.jpg" alt="" />
                <div className="follow-section-texts">
                <span className="cart-username">ca.v.ad</span>
                <p className="cart-fullname">Cavad Manafov</p>
                </div>
            </div>
            <div className="switch-button-part">
                {/* <Link className="switch-button" to='/salam'></Link> */}
                <div className="salam">
                <a className="follow-section-link" href="salam.com">Follow</a>
                </div>
            </div>
        </div>

        <div className="switch-section-div">
            <div className="switch-accounts-img-text">
                <img className="right-section-last-pp" src="/images/pp.jpg" alt="" />
                <div className="follow-section-texts">
                <span className="cart-username">ca.v.ad</span>
                <p className="cart-fullname">Cavad Manafov</p>
                </div>
            </div>
            <div className="switch-button-part">
                {/* <Link className="switch-button" to='/salam'></Link> */}
                <div className="salam">
                <a className="follow-section-link" href="salam.com">Follow</a>
                </div>
            </div>
        </div>

        <div className="switch-section-div">
            <div className="switch-accounts-img-text">
                <img className="right-section-last-pp" src="/images/pp.jpg" alt="" />
                <div className="follow-section-texts">
                <span className="cart-username">ca.v.ad</span>
                <p className="cart-fullname">Cavad Manafov</p>
                </div>
            </div>
            <div className="switch-button-part">
                {/* <Link className="switch-button" to='/salam'></Link> */}
                <div className="salam">
                <a className="follow-section-link" href="salam.com">Follow</a>
                </div>
            </div>
        </div>

        <div className="switch-section-div">
            <div className="switch-accounts-img-text">
                <img className="right-section-last-pp" src="/images/pp.jpg" alt="" />
                <div className="follow-section-texts">
                <span className="cart-username">ca.v.ad</span>
                <p className="cart-fullname">Cavad Manafov</p>
                </div>
            </div>
            <div className="switch-button-part">
                {/* <Link className="switch-button" to='/salam'></Link> */}
                <div className="salam">
                <a className="follow-section-link" href="salam.com">Follow</a>
                </div>
            </div>
        </div>


        </div>
        </section> 
    );

}
export default HeaderFollow;