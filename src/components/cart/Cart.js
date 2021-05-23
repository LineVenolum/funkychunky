import { useContext, useEffect } from "react";
import { ShopContext } from "../../shop/Shop";
import styles from "./Cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainButton } from "../buttons/MainButton";

export const Cart = () => {
  const { openCloseCart, checkout, isCartOpen, checkCheckout, removeLineItem } =
    useContext(ShopContext);

  useEffect(() => {
    checkCheckout();
    return () => {};
  }, [checkCheckout]);

  const openCheckout = () => {
    window.location.href = `${checkout.webUrl}`;
  };

  return (
    <div className={isCartOpen ? styles.openCart : styles.closedCart}>
      <div className={styles.exit}>
        <FontAwesomeIcon icon="times" onClick={openCloseCart} />
      </div>
      <h2 className={styles.heading}>HANDLEKURV</h2>
      {checkout.length === 0 && <p>EMPTY</p>}
      {checkout.lineItems &&
        checkout.lineItems.map((item) => (
          <div className={styles.lineItem} key={item.id}>
            <img
              className={styles.image}
              src={item.variant.image.src}
              alt="strikkeoppskrift"
            />
            <div className={styles.text}>
              <p className={styles.title}>{item.title}</p>
              <p>{item.variant.price}</p>
              <p>{item.quantity}</p>
            </div>
            <FontAwesomeIcon icon="trash" onClick={removeLineItem} />
          </div>
        ))}{" "}
      <p>DELSUM: {checkout.subtotalPrice}</p>
      <MainButton
        onClick={openCheckout}
        children={<p className={styles.buy}>KJØP NÅ</p>}
      />
    </div>
  );
};
