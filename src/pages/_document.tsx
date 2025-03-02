import HeadMeta from "@/components/template/HeadMeta";
import { Html, Head, Main, NextScript } from "next/document";
import React from "react";
// import Link from "next/link";
// import DefaultLayout from "@/template/Template";
export default function Document() {
  
  return (
    <Html lang="en" bs-theme-data="dark">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="My Next.js PWA" />
        <link rel="apple-touch-icon" href="favicons/bg-favicon--192x192.png" />
        <link rel="manifest" href="/manifest.json"/>
        <HeadMeta />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
