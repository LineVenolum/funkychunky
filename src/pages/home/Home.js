import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import styles from "./Home.module.scss";

export default function Home () {
    return(
        <div className={styles.home}>
            <Header/>
<p>HELLO THIS IS HOME</p>
<Footer />
        </div>
    ) 
}