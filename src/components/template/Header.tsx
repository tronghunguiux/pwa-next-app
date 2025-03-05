/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Head = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="top-bar">
                    <button type="button" className="btn-open-browse-menu" aria-label="Open side menu">
                        <span className="symbol"></span>
                    </button>
                    <Link href="/" className="top-bar__logo">
                        <img width="121" height="23" 
                            src="https://global-fs.webike-cdn.net/jp_statics/mobile/css/webike_template/images/img-template/logo-sp.png" 
                            data-src="https://global-fs.webike-cdn.net/jp_statics/mobile/css/webike_template/images/img-template/logo-sp.png" alt="Logo" 
                            data-lazied="IMG"
                            className="defer-lazied defer-loaded" />
                    </Link>
                    <div className="notification media-body d-flex">
                        <div className="notification__item btn-signin">
                            <a href="javascript:void(0)" className="notification__link btn-navmenu-user">
                                <span className="account-info">
                                    <span className="account-username dotted-line-1">
                                        ichiro
                                    </span>
                                    <span className="account-point media">
                                        <i className="icon icon-point resize-16"></i>
                                        <span className="point media-body dotted-line-1 show-point">&nbsp;0 pts.</span>
                                    </span>
                                </span>
                                <i className="icon-lg icon-lg-user-solid size-32"></i>
                            </a>
                        </div>
                            <div className="notification__item btn-mybike">
                                <a href="https://japan.webike.net/account/mybikes/" className="notification__link">
                                    <i className="icon-lg icon-lg-bike-solid size-32"></i>
                                    <span className="notification__count">5</span>
                                </a>
                            </div>				
                        <div className="notification__item">
                            <a href="https://japan.webike.net/shopping_cart.html" className="notification__link">
                                <i className="icon-lg icon-lg-cart-solid size-32"></i>
                                <span className="notification__count">6</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Head;
