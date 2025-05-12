import styles from "./Footer.module.css";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
          <h3>{t('logo-text')}</h3>
        </div>
        <nav className={styles.navFooter}>
          <ul className={styles.navContainer}>
            <Link href="#">{t('home')}</Link>
            <Link href="#">{t('portfolio')}</Link>
            <Link href="#">{t('about')}</Link>
            <Link href="#">{t('blog')}</Link>
            <Link href="#">{t('reviews')}</Link>
            <Link href="#">{t('contacts')}</Link>
          </ul>
        </nav>
        <div className={styles.contacts}>
          <div className={styles.phone}>
          <p>{t('days')}</p>
            <Link href="tel:0671496741">{t('phone')}</Link>
          </div>
          <div className={styles.address}>
            <p>{t('adress')}</p>
          </div>
        </div>
        <div className={styles.social}>
          <Link href="https://www.instagram.com/">
            <img src="/insta.png" alt="Instagram" />
          </Link>
          <Link href="https://www.facebook.com/">
            <img src="/facebook.png" alt="Facebook" />
          </Link>
          <Link href="https://www.telegram.com/">
            <img src="/telegram.png" alt="Telegram" />
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>{t('name')}.</p>
        <Link className={styles.link} href="#">{t('privacy')}</Link>
        <Link className={styles.link} href="#">{t('user-agreement')}</Link>
      </div>
    </footer>
  );
}
