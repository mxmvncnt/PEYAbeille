import Head from "next/head";
import "../styles/global.css";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}