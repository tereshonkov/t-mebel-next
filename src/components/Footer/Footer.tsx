import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
        <div className={styles.logoFooter}>
          <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
          </div>
          <p>Мебель под заказ — удобно. стильно. индивидуально.</p>
        </div>
        <div className={styles.socialWrapper}>
          <div className={styles.social}>
            <Link className={styles.insta} href="#"></Link>
            <Link className={styles.telega} href="#"></Link>
            <Link className={styles.facebook} href="#"></Link>
          </div>
          <p>© 2025 T-MEBEL Все права защищены</p>
        </div>
    </footer>
  );
}
