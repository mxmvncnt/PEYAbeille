import './App.css';
import React from "react";
import {
  HashRouter,
} from "react-router-dom";
import { Route, Routes } from "react-router";

import HeaderBar from './components/header_bar/HeaderBar';
import Accueil from './pages/client/accueil/Accueil';
import NousJoindre from './pages/client/nous_joindre/NousJoindre';


function App() {
  return (
    <div className='App'>
      <React.StrictMode>
        <HashRouter basename="/">
          <HeaderBar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/nousjoindre" element={<NousJoindre />} />
          </Routes>
        </HashRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
