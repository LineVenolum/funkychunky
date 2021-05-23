import { Products } from "../../components/products/Products";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ContactFormWithBlur } from "../../components/contact-form/ContactFormWithBlur";
import styles from "./Patterns.module.scss";
import { MobileHeader } from "../../components/mobile-header/MobileHeader";
import { useMediaQuery } from "react-responsive";
import { Heading } from "../../components/heading/Heading";
import { Cart } from "../../components/cart/Cart";
import { Helmet } from "react-helmet";
import { Instagram } from "../../components/instagram/Instagram";

export const Patterns = ({ client, products }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  return (
    <>
      <Helmet>
        <title>FunkyChunkyStrikk - Oppskrifter</title>
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
      <div className={styles.container}>
        <Heading children={"OPPSKRIFTER"} />
        <Products client={client} products={products} />
        <Instagram />
        <Footer />
      </div>
    </>
  );
};
