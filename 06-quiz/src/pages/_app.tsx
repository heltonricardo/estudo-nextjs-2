import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Quiz</title>
        <meta name="Projeto Quiz" content="Feito por Helton Ricardo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
