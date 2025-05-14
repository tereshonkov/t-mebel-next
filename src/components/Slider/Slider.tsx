import styles from './Slider.module.css';
import Carusel from '../Carusel/Carusel';
import Button from '../Button/Button';
import { getTranslations } from 'next-intl/server';
import Portfolio from '../Portfolio/Portfolio';

export default async function Slider() {
    const t = await getTranslations('Slider');
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
                <h2 className={styles.title}>{t('title')}</h2>
        {/* <Carusel /> */}
        <Portfolio />
        <div>
        <Button link="#">{t('button')}</Button>
        </div>
      </div>
    </section>
  )
}
