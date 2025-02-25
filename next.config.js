// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// eslint-disable-next-line @typescript-eslint/no-require-imports
const withPWA = require('next-pwa')({ dest: 'public' });
module.exports = withPWA({ reactStrictMode: true });