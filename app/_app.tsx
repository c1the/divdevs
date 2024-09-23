import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Div Devs</title>
        <link rel="icon" href="/divdevs.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
