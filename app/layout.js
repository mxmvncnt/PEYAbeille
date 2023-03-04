import React from 'react';
import Head from 'next/head';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/Footer';
import './global.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>

      <body>
        <HeaderBar />
        {children}
        <Footer />
      </body>


    </html>
  )
}
