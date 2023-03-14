import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import QueryWrapper from "@/context/queryWrapper";
import Nav from "../components/nav";
import { Toaster } from "react-hot-toast";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryWrapper>
        <Nav />
        <Toaster />
        <Component {...pageProps} />
      </QueryWrapper>
    </SessionProvider>
  );
}
