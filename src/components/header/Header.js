import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../../shop/Shop";
import { useContext } from "react";

export default function Header() {
  const { openCloseCart } = useContext(ShopContext);

  return (
    <div className={styles.container}>
      <div className={styles.topBorder}></div>
      <div className={styles.header}>
        <div className={styles.fakeNavbar}></div>
        <div className={styles.logo}>
          <Link to="/">
            <img src={Logo} alt="FunkyChunkyStrikk" />
          </Link>
        </div>
        <div className={styles.navbar}>
          <ul>
            <Link className={styles.link} to="/oppskrifter">
              OPPSKRIFTER
            </Link>
            <Link className={styles.link} to="/videoer">
              VIDEOER
            </Link>
            <Link className={styles.link} to="/om_oss">
              OM OSS
            </Link>
            <Link className={styles.link} onClick={openCloseCart}>
              <FontAwesomeIcon icon="shopping-bag" className={styles.icon} />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
