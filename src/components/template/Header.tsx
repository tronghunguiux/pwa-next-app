/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Head = () => {
    return (
        <header id="header">
            <div className="header_top container d-flex">
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
                </div>
                <div className="flex-fill d-flex justify-content-flex-end">
                    <button type="button" className="btn btn-icon d-flex align-items-center justify-content-center">
                        <i className="icon icon-bike_w"></i>
                    </button>
                    <button type="button" className="btn btn-icon d-flex align-items-center justify-content-center">
                        <i className="icon icon-bell-line"></i>
                        <span className="badge"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Head;
