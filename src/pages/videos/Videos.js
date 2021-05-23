import styles from "./Videos.module.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ReactPlayer from "react-player";
import { Heading } from "../../components/heading/Heading";
import { ContactFormWithBlur } from "../../components/contact-form/ContactFormWithBlur";
import { MobileHeader } from "../../components/mobile-header/MobileHeader";
import { useMediaQuery } from "react-responsive";
import { Cart } from "../../components/cart/Cart";
import { Helmet } from "react-helmet";

export const Videos = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  return (
    <>
      <Helmet>
        <title>FunkyChunkyStrikk - Videoer</title>
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

      {isDesktopOrLaptop && (
        <div className={styles.videos}>
          <Heading children="VIDEOER" />
          <div className={styles.videoContainer}>
            <div className={styles.video}>
              <ReactPlayer url="https://www.youtube.com/watch?v=qBL5WivcWl4&t=1s" />
              <h2 className={styles.videoTitle}>Rettstrikk</h2>
            </div>
            <div className={styles.video}>
              <ReactPlayer url="https://www.youtube.com/watch?v=qBL5WivcWl4&t=1s" />
              <h2 className={styles.videoTitle}>Rettstrikk</h2>
            </div>
            <div className={styles.video}>
              <ReactPlayer url="https://www.youtube.com/watch?v=qBL5WivcWl4&t=1s" />
              <h2 className={styles.videoTitle}>Rettstrikk</h2>
            </div>
            <div className={styles.video}>
              <ReactPlayer url="https://www.youtube.com/watch?v=qBL5WivcWl4&t=1s" />
              <h2 className={styles.videoTitle}>Rettstrikk</h2>
            </div>
          </div>{" "}
        </div>
      )}

      {!isDesktopOrLaptop && (
        <div className={styles.videos}>
          <Heading children="VIDEOER" />
          <div className={styles.videoContainer}>
            <div className={styles.video}>
              <ReactPlayer
                width="90%"
                height="40vh"
                url="https://www.youtube.com/watch?v=qBL5WivcWl4&t=1s"
              />
              <h2 className={styles.videoTitle}>Rettstrikk</h2>
            </div>
            <div className={styles.video}>
              <ReactPlayer
                width="90%"
                height="40vh"
                url="https://www.youtube.com/watch?v=qBL5WivcWl4&t=1s"
              />
              <h2 className={styles.videoTitle}>Rettstrikk</h2>
            </div>
            <div className={styles.video}>
              <ReactPlayer
                width="90%"
                height="40vh"
                url="https://www.youtube.com/watch?v=qBL5WivcWl4&t=1s"
              />
              <h2 className={styles.videoTitle}>Rettstrikk</h2>
            </div>
            <div className={styles.video}>
              <ReactPlayer
                width="90%"
                height="40vh"
                url="https://www.youtube.com/watch?v=qBL5WivcWl4&t=1s"
              />
              <h2 className={styles.videoTitle}>Rettstrikk</h2>
            </div>
          </div>{" "}
        </div>
      )}

      <div className={styles.innerBox}>
        <div className={styles.section}>
          <p className={styles.title}>Står du fortsatt fast?</p>
          <p className={styles.middle}>Null stress</p>
          <p>
            Ta kontakt med oss via ikonet nederst i høyre hjørne, så skal vi
            hjelpe deg!
          </p>
        </div>
        <div class={styles.image}>
          {" "}
          <div />
        </div>
      </div>
      <Footer />
    </>
  );
};
