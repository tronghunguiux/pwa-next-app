/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

// import InstallMobile from "../assets/styles/modules/pwa-install.module.scss"
const ButtonInstall = () => {
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
            {
                isInstalled && (window.matchMedia("(display-mode: standalone)").matches || (window.navigator as any).standalone) ? (
                    ''
                ) : deferredPrompt ? (
                    <button className="btnInstallMobile" onClick={installPWA}>
                        <i className="icon icon-phone-line"></i>
                        <span>USE VERSION FOR MOBILE</span>
                    </button>
                ) : (
                    <button className="hide-impotant btnOpenMobile" onClick={openPWA}>Open App</button>
                )
            }
        </>
    );
};

export default ButtonInstall;