import { ContactForm } from "../../components/contact-form/ContactForm";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./About.module.scss";
import { Heading } from "../../components/heading/Heading";
import { ContactFormWithBlur } from "../../components/contact-form/ContactFormWithBlur";
import { Cart } from "../../components/cart/Cart";
import { MobileHeader } from "../../components/mobile-header/MobileHeader";
import { useMediaQuery } from "react-responsive";
import { Helmet } from "react-helmet";
import { Instagram } from "../../components/instagram/Instagram";

export const About = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  return (
    <>
      <Helmet>
        <title>FunkyChunkyStrikk - Om oss</title>
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
      <div className={styles.box}>
        <Heading children="OM OSS" />
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.section}>
          <h2>Historie</h2>
          <p className={styles.infoText}>
            ChunkyFunkyStrikk ble startet vinteren 2020. Sigrid (grunnlegger)
            trålet nettet rundt etter oppskrifter til kule chunky jakker og
            gensere. Da hun ikke fant dette tenkte hun at hun kunne lage det
            selv. Hun kunne jo umulig være den eneste som ønsket seg dette.
          </p>
          <p className={styles.infoText}>
            Oppskriftene våre er laget av Sigrid og strikket av teststrikkere
            som har godkjent oppskriftene. Dersom du står fast i oppskriften
            eller har andre spørsmål må du bare ta kontakt med oss!
          </p>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionOne} />
        </div>
        <div className={styles.section}>
          <div className={styles.sectionTwo} />
        </div>

        <div className={styles.section}>
          <h2>OM SIGRID</h2>
          <p className={styles.infoText}>
            Sigrid er ei livat jente på 23 år. Hun har holdt på med strikking i
            litt over fem år. For Sigrid er strikking som meditasjon. I tillegg
            synes hun det er et stort pluss at man sitter med et fint produkt
            når man er ferdig.
          </p>
          <p className={styles.infoText}>
            For Sigrid er det viktig at alle er fornøyd med produktene de kjøper
            fra FunkyChunkyStrikk, så dersom du har innspill, forslag til
            forbedringer eller andre spørsmål setter vi stor pris på at du tar
            kontakt!
          </p>
        </div>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </div>
      <Instagram />
      <Footer />
    </>
  );
};
