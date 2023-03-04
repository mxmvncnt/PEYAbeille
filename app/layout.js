import React from 'react';
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
      <div>
        <HeaderBar />
        <body>{children}</body>
        <Footer />
      </div>
  )
}
