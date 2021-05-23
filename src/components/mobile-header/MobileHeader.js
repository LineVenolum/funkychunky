import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import styles from "./MobileHeader.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../../shop/Shop";
import { useContext } from "react";
import { SideMenu } from "../side-menu/SideMenu";

export function MobileHeader() {
  const { openCloseCart } = useContext(ShopContext);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const mobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <div className={styles.container}>
      {openMobileMenu && (
        <>
          <FontAwesomeIcon
            className={styles.exit}
            icon="times"
            onClick={mobileMenu}
          />{" "}
          <SideMenu close={mobileMenu} />{" "}
        </>
      )}
      <div className={styles.topBorder}></div>
      <div className={styles.box}>
        <div className={styles.header}>
          <div className={styles.fakeNavbar}>
            <FontAwesomeIcon icon="bars" onClick={mobileMenu} />
          </div>
          <div className={styles.logo}>
            <Link to="/">
              <img src={Logo} alt="FunkyChunkyStrikk" />
            </Link>
          </div>
          <div className={styles.fakeNavbar}>
            {" "}
            <Link className={styles.link} onClick={openCloseCart}>
              <FontAwesomeIcon icon="shopping-bag" className={styles.icon} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
