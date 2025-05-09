import styles from './Logo.module.css';
import { getTranslations } from 'next-intl/server';

export default async function Logo() {
    const t = await getTranslations('Logos');
  return (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>{t('title')}</h2>
        <div className={styles.logos}>
            <div className={styles.logo}>
                <img src="/logos/1.png" alt={t('alt-one')} className={styles.image} />
            </div>
            <div className={styles.logo}>
                <img src="/logos/2.png" alt={t('alt-two')} className={styles.image} />
            </div>
            <div className={styles.logo}>
                <img src="/logos/3.webp" alt={t('alt-three')} className={styles.image} />
            </div>
        </div>
    </section>
  )
}
