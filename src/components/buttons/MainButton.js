import styles from "./Buttons.module.scss";

export const MainButton = ({ children, onClick }) => {
  return (
    <button className={styles.mainButton} onClick={onClick}>
      {children}
    </button>
  );
};
