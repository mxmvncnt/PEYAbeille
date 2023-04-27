// import styles from '../../../styles/connexioninscription.module.css';
import styles from '../../../styles/connexion.module.css';
import '../../global.css'

function Connexion() {

    return (
        <div className={styles.body}>
            <div className={styles.card}>
                <form action={`/api/login`} method="GET">
                    <div>
                        <label htmlFor="courriel">Courriel:</label>
                        <input className="input-field-singlerow" type="email" id="courriel" name="email" />
                    </div>

                    <div>
                        <label htmlFor="mdp">Mot de passe:</label>
                        <input className="input-field-singlerow" type="password" id="mdp" name="password" />
                    </div>
                    <button type="submit" className={styles.btn_fullwidth}>
                        Se connecter
                    </button>
                </form>
            </div>

        </div>
    );
}

export default Connexion;