import type { AppProps } from "next/app";
// import '../assets/styles/template.scss'
import '@scss/template.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
