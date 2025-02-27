/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "./Header";
import Footer from "./Footer";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import "@scss/template.scss";

interface LayoutProps {
    children: React.ReactNode;
    showAsideLeft?: boolean;
    showAsideRight?: boolean;
    classPage?: string;
}

const DefaultLayout: React.FC<LayoutProps> = ({ children, showAsideLeft = false, showAsideRight = false, classPage = ''}) => {
    return (
        <>
            <main className="main_page">
                <Header/>
                <div className="main_body">
                    {showAsideLeft && <AsideLeft/>}
                    <div className="page_content">
                        {children}
                    </div>
                    {showAsideRight && <AsideRight/>}
                </div>
                <Footer/>
            </main>
        </>
)
    ;
};

export default DefaultLayout;
