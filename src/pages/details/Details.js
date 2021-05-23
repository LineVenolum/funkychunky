import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Details.module.scss";
import { ProductDetails } from "../../components/product-details/ProductDetails";
import { ContactFormWithBlur } from "../../components/contact-form/ContactFormWithBlur";
import { Cart } from "../../components/cart/Cart";
import { MobileHeader } from "../../components/mobile-header/MobileHeader";
import { useMediaQuery } from "react-responsive";
import { Instagram } from "../../components/instagram/Instagram";
import { Helmet } from "react-helmet";

export const Details = () => {
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
      <div className={styles.detailsContainer}>
        <ProductDetails />
      </div>
      <Instagram />
      <Footer />
    </>
  );
};
