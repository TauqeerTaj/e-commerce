import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
//Fontawesome
import "@/constant/fontawsome";
//components
import Header from "@/components/header";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";
import StoreProvider from "./StoreProvider";
import LoadingComponent from "@/components/LoadingBar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <StoreProvider>
          {loading && <LoadingComponent />}
          <Topbar />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </StoreProvider>
      </SessionProvider>
    </>
  );
}
