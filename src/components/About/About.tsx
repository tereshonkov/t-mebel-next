import Link from 'next/link';
import styles from './About.module.css';
import { getTranslations } from 'next-intl/server';

export default async function About() {
  const t = await getTranslations('aboutUsPage');
  return (
    <section className={styles.wrapper}>
        <div className={styles.content}>
            <h2 className={styles.title}>{t('title')}</h2>

            <div className={styles.description}>
              <p>{t('text1')}</p>
              <p>{t('text2')}</p>
              <p>{t('text3')}</p>
            </div>

            <h3 className={styles.contact}>{t('subtitle')}</h3>

            <Link className={styles.tel} href="tel:0671496741">{t('phone')}</Link>

            <div className={styles.socials}>
                <Link className={styles.instagram} href="https://www.facebook.com/" target="_blank"></Link>
                <Link className={styles.telegram} href="https://www.instagram.com/" target="_blank"></Link>
                <Link className={styles.facebook} href="https://www.linkedin.com/" target="_blank"></Link>
            </div>
        </div>
        <div className={styles.images}>
          <div className={styles.imageOne}>
            <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/modern/1/tablet.webp" alt="table" />
          </div>
          <div className={styles.imageTwo}>
            <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp" alt="kitchen" />
          </div>
        </div>
    </section>
  )
}
