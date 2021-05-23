import { Link } from "react-router-dom";
import styles from "./SideMenu.module.scss";

import Flowers from "../../images/flowers.svg";

export const SideMenu = (close) => {
  return (
    <div>
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
        </ul>
        <div className={styles.flowers}>
          <div className={styles.firstFlower}>
            <img src={Flowers} alt="FunkyChunky" />
          </div>
          <div className={styles.secondFlower}>
            <img src={Flowers} alt="FunkyChunky" />
          </div>
          <div className={styles.thirdFlower}>
            <img src={Flowers} alt="FunkyChunky" />
          </div>
          <div className={styles.fourthFlower}>
            <img src={Flowers} alt="FunkyChunky" />
          </div>
          <div className={styles.fifthFlower}>
            <img src={Flowers} alt="FunkyChunky" />
          </div>
        </div>
      </div>
    </div>
  );
};
