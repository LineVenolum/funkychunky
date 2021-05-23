
import styles from "./Buttons.module.scss";

export const SecondaryButton =({children}) => {
    return(
        <div className={styles.secondaryButton} >
            {children}
        </div>
    )
}