import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/nav";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Nav />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
