import './App.css';
import React from "react";
import {
  HashRouter,
} from "react-router-dom";
import { Route, Routes } from "react-router";

import "./components/Global.css";

import HeaderBar from './components/header_bar/HeaderBar';
import Footer from './components/footer/Footer';

import Accueil from './pages/client/accueil/Accueil';
import Produits from './pages/client/produits/Produits';
import APropos from './pages/client/a_propos/APropos';
import NousJoindre from './pages/client/nous_joindre/NousJoindre';

import Produit from './pages/client/Produit/Produit';


function App() {
  return (
    <div className='App'>
      <React.StrictMode>
        <HashRouter basename="/">
          <HeaderBar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/produit" element={<Produit />} />
            <Route path="/apropos" element={<APropos />} />
            <Route path="/nousjoindre" element={<NousJoindre />} />
          </Routes>
          <Footer />
        </HashRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
