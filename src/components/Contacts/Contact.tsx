import styles from "./Contact.module.css";
import Link from "next/link";
import FormContact from "./FormContact";
import { getTranslations } from "next-intl/server";

export default async function Contact() {
    const t = await getTranslations("contactPage");
  return (
    <section className={styles.wrapper}>
      <div className={styles.contact}>
        <h2 className={styles.titleContact}>{t('contactTitle')}</h2>
        <p className={styles.textContact}>{t('adress')}</p>
        <p className={styles.textContact}>{t('phone')}</p>
        <div className={styles.socials}>
          <p className={styles.textContact}>{t('social')}:</p>
          <div className={styles.socialWrapper}>
            <Link href="#" target="_blank" className={styles.instagram}></Link>
            <Link href="#" target="_blank" className={styles.telegram}></Link>
            <Link href="#" target="_blank" className={styles.facebook}></Link>
          </div>
        </div>
      </div>
        <FormContact />
    </section>
  );
}
