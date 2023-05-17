import { useRouter } from 'next/navigation';
import { useCookies } from "react-cookie";

export default function Commande() {
    const quantite = data["data"]["quantite"]
    const id_produit = data["data"]["item"]

    const [cookies, setCookie] = useCookies(['panier'])
    const router = useRouter();

    return (
        <div className={styles.body}>

        </div>
    );
}