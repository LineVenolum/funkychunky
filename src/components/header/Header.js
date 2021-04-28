import {Link} from "react-router-dom";
import Logo from "../../images/logo.svg";
import styles from "./Header.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Header(){
    return(
        <>
        <div className={styles.topBorder}></div>
    <div className={styles.header}>
        <div className={styles.fakeNavbar}></div>
        <div className={styles.logo}>
        <img  src={Logo} alt="FunkyChunkyLogo"/>
        </div>
        <div className={styles.navbar}>
        <ul>
            <Link className={styles.link} to="/patterns">OPPSKRIFTER</Link>
            <Link className={styles.link} to="/patterns">VIDEOER</Link>
            <Link className={styles.link} to="/patterns">OM OSS</Link>
            <Link className={styles.link} to="/patterns"><FontAwesomeIcon icon="shopping-bag" className={styles.icon}/></Link>
        </ul>
        </div>
    </div>
    </>

    )
}