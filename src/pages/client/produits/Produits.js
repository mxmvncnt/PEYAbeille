import React from "react";
import './Style.css'
import { Link } from "react-router-dom";
import { useEffect } from 'react';

export default function Produits() {

    // Code pour requete api: https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/
    let url = "http://localhost:4003/api/produits"
    
    const makeAPICall = async () => {
        try {
          const response = await fetch(url, {mode:'cors'});
          const data = await response.json();
          console.log({ data })
        }
        catch (e) {
          console.log(e)
        }
      }
      useEffect(() => {
        makeAPICall();
      }, [])


    return (
        <div>
            <h1>Produits</h1>
            <div className="grid-produits">
                <div className="produit">
                    <h2 className="titre">
                    </h2>
                    <h3 className="prix">
                    </h3>
                    <Link
                        to="/produit/12">
                        <button className="btn-acheter">Acheter</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}