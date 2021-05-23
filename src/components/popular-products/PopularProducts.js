import styles from "./PopularProducts.module.scss";
import { ShopContext } from "../../shop/Shop";
import { useContext } from "react";
import { MainButton } from "../buttons/MainButton";
import { Link } from "react-router-dom";

export const PopularProducts = () => {
  const { collections } = useContext(ShopContext);

  return (
    <div className={styles.section}>
      <h2 className={styles.header}>MEST POPULÆRE</h2>
      <div className={styles.popularproducts}>
        {collections.map((product) => {
          return (
            <div key={product.id} className={styles.product}>
              <Link to={`/oppskrifter/detaljer/${product.id}`}>
                <img
                  className={styles.image}
                  src={product.images[0].src}
                  alt="strikkejakke"
                />
              </Link>
              <p className={styles.title}>{product.title}</p>
            </div>
          );
        })}
      </div>
      <MainButton children={<Link to="/oppskrifter">SE ALLE</Link>} />
    </div>
  );
};
