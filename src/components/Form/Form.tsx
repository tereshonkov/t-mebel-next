import styles from "./Form.module.css";
import { getTranslations } from "next-intl/server";
import PopupForm from "../PopupForm/PopupForm";

export default async function Form() {
  const t = await getTranslations("form");
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {t('titleRegular')} <span>{t('titleBold')}</span>{t('titleRegularTwo')}<span>{t('titleBoldTwo')}</span>
          </h2>
          <p className={styles.subtitle}>
            Безкоштовна консультація, виїзд дизайнера та розрахунок вартості проєкту
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <PopupForm 
            triggerLabel="Замовити консультацію"
            useDefaultTriggerStyles={false}
            triggerClassName={styles.ctaButton}
          />
          <p className={styles.note}>
            ⚡ Відповімо протягом 15 хвилин
          </p>
        </div>
      </div>
    </section>
  );
}
