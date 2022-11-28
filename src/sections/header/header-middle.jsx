function HeaderMiddle(){
    return(
        <section className="header-middle-section">
            <div className="middle-cart">
                <div className="cart-top-section">
                <div className="cart-top-section-texts-images">
                    <img className="middle-pp-image" src="/images/pp.jpg" alt="" />
                    <div className="cart-main-texts">
                    <span className="cart-username">ca.v.ad</span>
                    <p className="cart-location">Baku, Azerbaijan</p>
                </div>
                 </div>
                 <div className="three-dots">
                    ...
                 </div>
                 </div>
                <img className="middle-main-image" src="/images/test-image.jpg" alt="" />
            </div>
        </section>
    );
}
export default HeaderMiddle;