"use client";
import React from "react";
import {useState} from "react"
import Link from "next/link"
import BoutonLogOut from "../components/BoutonLogOut";
import styles from '../styles/menuDropdown.module.css';
// import {getNom} from '../server/Api';
// import { getNom } from "../server/Api";

function MenuDropdown(props) {
    
    return(
        <div className={styles.monCompte} >
                <div className={styles.containerDropDown} style={{display: props.show ? 'block' :'none'}}>
                    <div className={styles.containerOption}><p>Bonjour {props.nom}</p></div>
                    <div> <Link href="/compte">Mes informations</Link></div>
                    <div> <Link href="/compte">Mes commandes</Link> </div>
                    <div> <BoutonLogOut/></div>
                </div>
            
        </div>
    );
}

// function MenuDropdown(){
//     return(
//         // <DropdownButton as="a" id="dropdown-item-button" title="Mon compte">
//         //     <Dropdown.Item href="/">Mes informations</Dropdown.Item>
//         //     <Dropdown.Item href="/">Mes commandes</Dropdown.Item>
//         // </DropdownButton>
//         <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//         <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
//         <Dropdown.Item as="button">Action</Dropdown.Item>
//         <Dropdown.Item as="button">Another action</Dropdown.Item>
//         <Dropdown.Item as="button">Something else</Dropdown.Item>
//       </DropdownButton>
//     )
// }
export default MenuDropdown;