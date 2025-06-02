import styles from "./Form.module.css";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function Form() {
  const t = await getTranslations("form");
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        {t('titleRegular')} <span>{t('titleBold')}</span>{t('titleRegularTwo')}<span>{t('titleBoldTwo')}</span>
      </h2>
      <div className={styles.numberWrapper}>
        <h3 className={styles.number}>
            067 - 149 - 67 - 41
        </h3>
        <Link href="tel:0671496741" className={styles.btn}>
          {t('btn')}
        </Link>
      </div>
    </section>
  );
}
