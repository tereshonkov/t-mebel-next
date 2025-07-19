import styles from "./Footer.module.css";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("footer");
  return (
    <footer className={styles.wrapper}>
        <div className={styles.logoFooter}>
          <div className={styles.logo}>
          <img src="/logo.png" alt="logo" />
          </div>
          <p>{t('title')}</p>
        </div>
        <div className={styles.socialWrapper}>
          <div className={styles.social}>
            <Link className={styles.insta} href="https://www.instagram.com/tereshonkov.alexander/"></Link>
            <Link className={styles.telega} href="#"></Link>
            <Link className={styles.facebook} href="#"></Link>
          </div>
          <p>{t('subtitle')}</p>
        </div>
    </footer>
  );
}
