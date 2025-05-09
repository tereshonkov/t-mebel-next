import styles from './Hero.module.css'
import { getTranslations } from 'next-intl/server';
import Button from '../Button/Button';

export default async function Hero() {
  const t = await getTranslations('Hero');
  return (
    <section className={styles.wrapper}>
    <img
      className={styles.backgroundImg}
      decoding="async"
      data-fetchpriority="high"
      src="https://storage.googleapis.com/t-mebel/Image/lqip-hero.webp" // LQIP изображение
      data-src="https://storage.googleapis.com/t-mebel/Image/home/slider/item2/dekstope.webp" // Основное изображение
      alt="kitchen"
      srcSet="https://storage.googleapis.com/t-mebel/Image/home/slider/item2/dekstope.webp 1920w, https://storage.googleapis.com/t-mebel/Image/home/slider/item2/tablet.webp 1024w, https://storage.googleapis.com/t-mebel/Image/home/slider/item2/mobile.webp 768w"
      loading="eager"
    />

    <div className={styles.headerTitle}>
      <h2 className={styles.heading}>
        {t('title')}
      </h2>
      <p className={styles.paragraph}>
        {t('description')}
      </p>
     <div className={styles.btn}>
     <Button link='#'>{t('button')}</Button>
     </div>
    </div>
  </section>
  )
}
