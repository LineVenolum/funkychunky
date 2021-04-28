import {Link} from "react-router-dom";
import styles from "./Footer.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Header(){
    return(
    <div className={styles.footer}>
                    <div className={styles.footerMenu}>
        <ul>
            <Link className={styles.link} to="/faq">SPØRSMÅL</Link>
            <Link className={styles.link} to="/patterns">KONTAKT</Link>
            <a target="_blank"  rel="noreferrer" className={styles.link} href="https://www.vg.no"><FontAwesomeIcon icon={['fab', 'instagram']} className={styles.icon}/></a>
        </ul>
        </div>
        <div className={styles.bottomText}> 
            <p>&copy; FunkyChunkyStrikk - Alle rettigheter reservert</p>
            <p>Nettside av Line Venolum</p>
        </div>
        </div>
    )
}