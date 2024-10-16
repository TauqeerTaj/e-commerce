import "@/styles/globals.css";
import type { AppProps } from "next/app";
//Fontawesome
import "@/constant/fontawsome";
//components
import Header from "@/components/header";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Topbar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
