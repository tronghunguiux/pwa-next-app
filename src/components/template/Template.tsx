import Header from "./Header";
import Footer from "./Footer";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
import HeadMeta from "./HeadMeta";

interface LayoutProps {
  children: React.ReactNode;
  showAsideLeft?: boolean;
  showAsideRight?: boolean;
  idPage?: string;
  classPage?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string;
  linkcss?: string[];
}

const DefaultLayout: React.FC<LayoutProps> = ({ title, description, keywords, image, url, canonical, children, linkcss=[], showAsideLeft = false, showAsideRight = false, classPage = '', idPage }) => {

  return (
    <>
      <HeadMeta
        title={title}
        description={description}
        image={image}
        url={url}
        keywords={keywords}
        canonical={canonical ? canonical : url}
        linkcss={linkcss}
      />
      <main id={idPage} className={"main_page " + classPage}>
        <Header />
        <div className="main_body">
          {showAsideLeft && <AsideLeft />}
          <div className={"page_content"} >
            {children}
          </div>
          {showAsideRight && <AsideRight />}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default DefaultLayout;
