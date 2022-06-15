import { useEffect } from "react";
import "../styles/globals.css";
import Script from "next/script";
import Aos from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      once: false,
      offset: 70,
      delay: 50,
    });
  });
  return (
    <>
      <Script src="/js/marker.js"></Script>
      <Script src="/js/algorithm.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;