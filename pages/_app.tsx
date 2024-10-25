import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from 'next/router';
//Fontawesome
import "@/constant/fontawsome";
//components
import Header from "@/components/header";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  console.log('path:', pathname)
  return (
    <>
      
      {(pathname !== '/' && pathname !== '/login') && 
      <><Topbar /><Header /></>}
      <Component {...pageProps} />
      {(pathname !== '/' && pathname !== '/login') && <Footer />}
    </>
  );
}
