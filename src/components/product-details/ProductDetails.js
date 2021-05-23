import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../shop/Shop";
import { MainButton } from "../buttons/MainButton";
import styles from "./ProductDetails.module.scss";
import { useMediaQuery } from "react-responsive";

export const ProductDetails = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const { id } = useParams();

  const { fetchSingleProduct, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchSingleProduct(id);
    return () => {};
  }, []);

  return (
    <>
      {isDesktopOrLaptop ? (
        <div className={styles.details} key={product.id}>
          <div className={styles.content}>
            <div className={styles.box}>
              {product.id && (
                <img
                  className={styles.image}
                  src={product.images[0].src}
                  alt="strikkeoppskrift"
                ></img>
              )}
            </div>
            <div className={styles.box}>
              <h2 className={styles.title}>{product.title}</h2>
              <p className={styles.description}>{product.description}</p>
              <div className={styles.priceandbutton}>
                {product.id && <p>{parseInt(product.variants[0].price)} NOK</p>}

                <MainButton
                  onClick={() => addItemToCheckout(product.variants[0].id, 1)}
                  children={"KJØP"}
                />
              </div>
            </div>
          </div>
          {product.id && (
            <div className={styles.secondImage}>
              <img src={product.images[1].src} alt="strikkeoppskrift" />
            </div>
          )}
        </div>
      ) : (
        <div className={styles.details} key={product.id}>
          <div className={styles.titlePrice}>
            <h2 className={styles.title}>{product.title}</h2>
            {product.id && (
              <p className={styles.price}>
                {parseInt(product.variants[0].price)} NOK
              </p>
            )}
          </div>
          {product.id && (
            <img
              className={styles.image}
              src={product.images[0].src}
              alt="strikkeoppskrift"
            ></img>
          )}
          <p className={styles.description}>{product.description}</p>
          <div className={styles.button}>
            <MainButton
              onClick={() => addItemToCheckout(product.variants[0].id, 1)}
              children={<p className={styles.text}>KJØP</p>}
            />
          </div>
        </div>
      )}
    </>
  );
};
