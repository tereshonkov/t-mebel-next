import styles from './Slider.module.css';
import Carusel from '../Carusel/Carusel';
import Button from '../Button/Button';
import { getTranslations } from 'next-intl/server';

export default async function Slider() {
    const t = await getTranslations('Slider');
  return (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>{t('title')}</h2>
        <Carusel />
        <div>
        <Button link="#">{t('button')}</Button>
        </div>
    </section>
  )
}
