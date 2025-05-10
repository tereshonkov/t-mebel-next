import styles from "./Faq.module.css";
import Accordion from "./Accordion";
import { getTranslations } from "next-intl/server";

export default async function Faq() {
    const t = await getTranslations('FAQ');
  return (
    <div className={styles.wrapper}>
        <h2 className={styles.title}>{t('title')}</h2>
        <Accordion />
    </div>
  )
}
