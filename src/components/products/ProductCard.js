import { useState } from "react";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";
import { MainButton } from "../buttons/MainButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { useMediaQuery } from "react-responsive";

export const ProductCard = ({
  id,
  image,
  title,
  price,
  description,
  onClick,
  imagetwo,
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter(e) {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <>
      {isDesktopOrLaptop & isHovering ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.cardWrapper}
        >
          <div className={styles.expandedCard}>
            <div className={styles.productCard} key={id}>
              <section className={styles.imageSection}>
                <img src={imagetwo} alt="strikkeoppskrift"></img>
              </section>
              <section className={styles.information}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.price}>{price} NOK</p>
              </section>
              <section className={styles.information}>
                <p>{description}</p>
              </section>
              <div className={styles.buttons}>
                <MainButton className={styles.button} onClick={onClick}>
                  KJØP
                </MainButton>
                <SecondaryButton className={styles.button}>
                  <Link
                    className={styles.link}
                    to={`/oppskrifter/detaljer/${id}`}
                  >
                    MER INFO
                  </Link>
                </SecondaryButton>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      ) : isDesktopOrLaptop ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.cardWrapper}
        >
          <div className={styles.productCard} key={id}>
            <section>
              <img src={image} alt="strikkeoppskrift"></img>
            </section>
            <section className={styles.information}>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.price}>{price} NOK</p>
            </section>
          </div>{" "}
        </div>
      ) : null}

      {!isDesktopOrLaptop && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.cardWrapper}
        >
          <div className={styles.expandedCard}>
            <div className={styles.productCard} key={id}>
              <section className={styles.imageSection}>
                <img src={imagetwo} alt="strikkeoppskrift"></img>
              </section>
              <section className={styles.information}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.price}>{price} NOK</p>
              </section>
              <section className={styles.information}>
                <p>{description}</p>
              </section>
              <div className={styles.buttons}>
                <MainButton className={styles.button} onClick={onClick}>
                  KJØP
                </MainButton>
                <SecondaryButton className={styles.button}>
                  <Link className={styles.link} to={`/detail/${id}`}>
                    MER INFO
                  </Link>
                </SecondaryButton>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      )}
    </>
  );
};
