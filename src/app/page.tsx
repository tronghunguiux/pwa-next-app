/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import DefaultLayout from "@/template/Template";
import Link from "next/link";
import React from "react";
// import Link from "next/link";
// import DefaultLayout from "@/template/Template";
import { useEffect, useState } from "react";

const Home = () => {
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
      <div>
        <h1>Welcome to PWA</h1>
        {/* {isInstalled ? 'false: install unvaliable':'true: install avaliable'} */}
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

      <h1>
          <DefaultLayout showAsideLeft showAsideRight classPage={''}>
              <h1>Welcome to Pokémon List</h1>
              <Link href="/pokemon">
                  <button className="btn btn-outline-primary navigate-btn">Let&apos;s Catch Them All! Pokémon</button>
              </Link>
          </DefaultLayout>
        </h1>
    </>
  );
};

export default Home;
