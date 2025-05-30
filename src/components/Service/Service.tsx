import styles from './Service.module.css'
import Button from '../Button/Button'
import { getTranslations } from 'next-intl/server'

export default async function Service() {
    const t = await getTranslations('Services')
  return (
    <section className={styles.service}>
        <div className={styles.first}>
            <div className={styles.imgWrapper}>
                <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp" alt={t('alt-one')} />
            </div>
            <div className={styles.textWrapper}>
                <h2 className={styles.title}>{t('title-one')}</h2>
                <p className={styles.subtitle}>{t('subtitle-one')}</p>
                <Button link='#'>Кухни</Button>
            </div>
        </div>
        <div className={styles.second}>
            <div className={styles.textWrapper}>
            <h2 className={styles.title}>{t('title-two')}</h2>
            <p className={styles.subtitle}>{t('subtitle-two')}</p>
            <Button link='#'>Шкафы</Button>
            </div>
            <div className={styles.imgWrapper}>
                <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/7/tablet.webp" alt={t('alt-two')} />
            </div>
        </div>
    </section>
  )}
