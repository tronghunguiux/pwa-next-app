/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "./Header";
import Footer from "./Footer";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
// import "@scss/template.scss";
import Head from "next/head";

interface LayoutProps {
    title?: string;
    description?: string;
    children: React.ReactNode;
    showAsideLeft?: boolean;
    showAsideRight?: boolean;
    classPage?: string;
}

const DefaultLayout: React.FC<LayoutProps> = ({ title, description, children, showAsideLeft = false, showAsideRight = false, classPage = ''}) => {
    return (
        <>
            <html>
                <Head>
                    <title>{title ? `${title} | MyApp` : "MyApp"}</title>
                    <meta name="description" content={description || "Default description"} />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <body>
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
                </body>
            </html>
        </>
)
    ;
};

export default DefaultLayout;
