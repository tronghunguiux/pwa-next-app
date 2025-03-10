import Link from "next/link";
import InstallButton from "../InstallButton";
import ImgSlogan from "../../assets/img-css/webike_logo_all_w_slogon.svg";
import Image from "next/image";


const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <InstallButton />
            </div>
            <div className="container text-center">
                <a href="https://www.webike.tw" className="mx-auto d-inline-block line-height-xs" target="_top">
                    <Image src={ImgSlogan} alt="「Webike-摩托台灣」" width={160} height={64}/>
                </a>
                <div className="pt-1 contact-information">
                    <p className="row">
                        <span className="label font-size-sm text-white">營運公司：</span>
                        <span className="value font-size-sm text-white">
                            <Link href="http://www.everglory.asia/" title="榮芳興業有限公司" className="text-underline" target="_top">
                                榮芳興業有限公司
                            </Link>
                        </span>
                    </p>
                    <p className="row">
                        <span className="label font-size-sm text-white">地址：</span>
                        <span className="value font-size-sm text-white">
                            248 新北市五股區五工三路101號2樓
                        </span>
                    </p>
                    <p className="row">
                        <span className="label font-size-sm text-white">電子信箱：</span>
                        <span className="value font-size-sm text-white">
                            <Link href="http://www.everglory.asia/" title="榮芳興業有限公司" className="text-underline" target="_top">
                                service@webike.tw
                            </Link>
                        </span>
                    </p>
                    <p className="row">
                        <span className="label font-size-sm text-white">電話：</span>
                        <span className="value font-size-sm text-white">
                                02-22982020  
                                (訂單、商品問題請使用 <Link href="http://www.everglory.asia/" title="榮芳興業有限公司" className="text-underline" target="_top">&quot;客服諮詢&quot;</Link>)
                        </span>
                    </p>
                    <p className="row">
                        <span className="value font-size-sm text-white">
                            (辦公室地址，非實體店面，不提供商品購買服務)
                        </span>
                    </p>
                </div>
            </div>
            <div className="container">
                <ul className="we-services flex-wrap d-flex aligns-item-center justify-content-space-between">
                    <li className="item_service">
                        <Link href={'/'}>
                            <span>關於我們</span>
                            <i className="icon"></i>
                        </Link>
                    </li>
                    <li className="item_service">
                        <Link href={'/'}>
                            <span>摩托百貨</span>
                            <i className="icon"></i>
                        </Link>
                    </li>
                    <li className="item_service">
                        <Link href={'/'}>
                            <span>服務說明</span>
                            <i className="icon"></i>
                        </Link>
                    </li>
                    <li className="item_service">
                        <Link href={'/'}>
                            <span>摩托車市</span>
                            <i className="icon"></i>
                        </Link>
                    </li>
                    <li className="item_service">
                        <Link href={'/'}>
                            <span>客服諮詢</span>
                            <i className="icon"></i>
                        </Link>
                    </li>
                    <li className="item_service">
                        <Link href={'/'}>
                            <span>綜合媒體</span>
                            <i className="icon"></i>
                        </Link>
                    </li>
                    <li className="item_service">
                        <Link href={'/'}>
                            <span>Webike20週年</span>
                            <i className="icon"></i>
                        </Link>
                    </li>
                </ul>
                <ul className="we-social d-flex aligns-item-center justify-content-space-between">
                    <li className="item_scocial">
                        <Link href={'/'}>
                            <i className="icon icon-social-fb"></i>
                        </Link>
                    </li>
                    <li className="item_scocial">
                        <Link href={'/'}>
                            <i className="icon icon-social-ins"></i>
                        </Link>
                    </li>
                    <li className="item_scocial">
                        <Link href={'/'}>
                            <i className="icon icon-social-pin"></i>
                        </Link>
                    </li>
                    <li className="item_scocial">
                        <Link href={'/'}>
                            <i className="icon icon-social-ytb"></i>
                        </Link>
                    </li>
                    <li className="item_scocial">
                        <Link href={'/'}>
                            <i className="icon icon-social-twi_w"></i>
                        </Link>
                    </li>
                </ul>
            </div>
            <p className="font-size-xs copyright text-center bg-black text-white p-05 mt-1">
                Copyright © 2009 - 2025 Webike Japan All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
