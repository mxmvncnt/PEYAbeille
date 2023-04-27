import React from "react";
// import styles from '../../../styles/connexioninscription.module.css';
import styles from '../../../styles/connexion.module.css';
import '../../global.css'

function Connexion() {

    return (
        <div className={styles.body}>
            <div className={styles.card}>

                <div className={styles.card_header}>
                    <h2 className={styles.card_title}>Connexion</h2>
                </div>

                <form action={`/api/login`} method="GET">
                    <div className={styles.card_item}>
                        <label htmlFor="courriel">Courriel:</label>
                        <input className="input-field-singlerow" type="email" id="courriel" name="email" />
                    </div>

                    <div className={styles.card_item}>
                        <label htmlFor="mdp">Mot de passe:</label>
                        <input className="input-field-singlerow" type="password" id="mdp" name="password" />
                    </div>

                    <div className={styles.card_item}>
                        <button type="submit" className={styles.btn_fullwidth}>
                            Se connecter
                        </button>
                    </div>
                    <div className={styles.card_footer}>

                    </div>
                </form>
            </div>

        </div>
    );
}

export default Connexion;