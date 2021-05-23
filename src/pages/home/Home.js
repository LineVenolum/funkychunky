import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Home.module.scss";
import { Instagram } from "../../components/instagram/Instagram";
import { Cart } from "../../components/cart/Cart";
import { PopularProducts } from "../../components/popular-products/PopularProducts";
import { ContactFormWithBlur } from "../../components/contact-form/ContactFormWithBlur";
import { MobileHeader } from "../../components/mobile-header/MobileHeader";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Home() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  return (
    <>
      <Helmet>
        <title>FunkyChunkyStrikk</title>
        <meta
          name="description"
          content="Chunky strikkeoppskrifter som er enkle å lage!"
        />
        <meta
          name="keywords"
          content="Strikkeoppskrifter, trendy strikkeoppskrifter, enkel strikkeoppskrift, strikkeoppskrift"
        />
      </Helmet>
      <ContactFormWithBlur />
      {isDesktopOrLaptop ? <Header /> : <MobileHeader />}
      <Cart />
      <div className={styles.home}>
        <div className={styles.images}>
          <p className={styles.bannertext}>
            Velkommen til en verden av chunky strikk!
          </p>
          <Link to="/oppskrifter">
            <button className={styles.buybutton}>SE OPPSKRIFTER</button>
          </Link>
        </div>
        <PopularProducts />
        <div className={styles.innerBox}>
          <div className={styles.section}>
            <p className={styles.title}>Ikke helt trygg på strikking enda?</p>
            <p className={styles.middle}>Null stress</p>
            <p>
              Vi har nemlig laget videoer som skal hjelpe deg gjennom
              oppskriftene.
            </p>
          </div>
          <div className={styles.image}>
            <Link to="/videoer">
              <button className={styles.videobutton}>VIDEOER</button>
            </Link>
          </div>
        </div>
        <Instagram />
      </div>
      <Footer />
    </>
  );
}
