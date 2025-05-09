import styles from './Slider.module.css';
import { getTranslations } from 'next-intl/server';
import Button from '../Button/Button';

export default async function Form() {
    const t = await getTranslations('Form');
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{t('title')}</h2>
            <form className={styles.form}>
                <div className={styles.names}>
                    <div className={styles.name}>
                        <input id='labelName' type="text" className={styles.input} />
                        <label htmlFor="labelName" className={styles.label}></label>
                    </div>
                    <div className="phone">
                        <input id='phone' type="text" className={styles.input} />
                        <label htmlFor="phone" className={styles.label}></label>
                    </div>
                </div>
                <textarea className={styles.text}></textarea>
                <Button link='#'>{t('button')}</Button>
            </form>
        </section>
    )
}
