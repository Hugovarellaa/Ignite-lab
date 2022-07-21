import logoImg from "../../assets/logo.svg";
import styles from "./Header.styles.module.css";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logoImg} alt="" />
    </header>
  );
}
