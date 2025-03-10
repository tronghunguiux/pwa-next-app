// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({ 
    dest: 'public',
    disable: process.env.NODE_ENV === "development",        // disable PWA in the development environment
    register: true,         // register the PWA service worker
    skipWaiting: true,      // skip waiting for service worker activation
    buildExcludes: [/middleware-manifest.json$/, /dynamic-css-manifest.json$/] // Fix lỗi cache file 404 
});
module.exports = withPWA({
    reactStrictMode: true,
});