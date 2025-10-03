import styles from "./Form.module.css";
import { getTranslations } from "next-intl/server";
import Button from "./Button";

export default async function Form() {
  const t = await getTranslations("form");
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        {t('titleRegular')} <span>{t('titleBold')}</span>{t('titleRegularTwo')}<span>{t('titleBoldTwo')}</span>
      </h2>
      <Button />
    </section>
  );
}
