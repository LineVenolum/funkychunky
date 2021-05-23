
import styles from "./Heading.module.scss";

export const Heading = ({children}) => {
    return(
        <div className={styles.heading} >
            <h1>{children}</h1>
        </div>
    )
}