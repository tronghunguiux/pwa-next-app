/* eslint-disable @typescript-eslint/no-explicit-any */

import Header from "./Header";
import Footer from "./Footer";
import AsideLeft from "./AsideLeft";
import AsideRight from "./AsideRight";
// import "@scss/template.scss";
// import '@css/globals.css'
import HeadMeta from "./HeadMeta";
import { useEffect, useState } from "react";

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
}

const DefaultLayout: React.FC<LayoutProps> = ({ title, description, keywords, image ,url ,canonical, children, showAsideLeft = false, showAsideRight = false, classPage = '', idPage}) => {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
      const [isInstalled, setIsInstalled] = useState<boolean | null>(null);
    
      useEffect(() => {
        // Check PWA running browse or standalone
        const checkPWAStatus = () => {
          const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
          // const isiOS = /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase());
          const isStandaloneiOS = (window.navigator as any).standalone === true;
    
          // Check the PWA is installed
          const wasInstalledBefore = localStorage.getItem("pwa-installed") === "true";
    
          if (isStandalone || isStandaloneiOS || wasInstalledBefore) {
            setIsInstalled(true);
          } else {
            setIsInstalled(false);
          }
        };
    
        // Condition: can or can't install
        const beforeInstallHandler = (event: any) => {
          event.preventDefault();
          setDeferredPrompt(event);
        };
    
        // Condition: App(PWA) was installed
        const appInstalledHandler = () => {
          localStorage.setItem("pwa-installed", "true"); // set state install = true, else = false
          setIsInstalled(true);
        };
    
        checkPWAStatus();
    
        window.addEventListener("beforeinstallprompt", beforeInstallHandler);
        window.addEventListener("appinstalled", appInstalledHandler);
    
        return () => {
          window.removeEventListener("beforeinstallprompt", beforeInstallHandler);
          window.removeEventListener("appinstalled", appInstalledHandler);
        };
      }, []);
    
      const installPWA = () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === "accepted") {
              console.log("User accepted the install");
            } else {
              console.log("User dismissed the install");
            }
            setDeferredPrompt(null);
          });
        }
      };
      const openPWA = () => {
        window.location.replace(window.location.origin);
      //   if (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone) {
      //     window.location.reload();
      //   } else {
      //     window.location.replace(window.location.origin);
      //   }
      };
    return (
        <>
            <HeadMeta
                title={title}
                description={description}
                image={image}
                url={url}
                keywords={keywords}
                canonical={canonical ? canonical : url}
            />
            <main id={idPage} className={"main_page "+classPage}>
                <Header/>
                    <div>
                    {
                        isInstalled && (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone) ? (
                            <button onClick={() => window.location.reload()}>Reload</button>
                        ) : deferredPrompt ? (
                            <button onClick={installPWA}>Install PWA</button>
                        ) : (
                            <button onClick={openPWA}>Open App</button>
                        )
                    }
                </div>
                <div className="main_body">
                    {showAsideLeft && <AsideLeft/>}
                    <div className={"page_content"} >
                        {children}
                    </div>
                    {showAsideRight && <AsideRight/>}
                </div>
                <Footer/>
            </main>
        </>
    ) ;
};

export default DefaultLayout;
