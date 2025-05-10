import styles from './Form.module.css';
import { getTranslations } from 'next-intl/server';
import FormClient from './FormClient';

export default async function Form() {
    const t = await getTranslations('Form');
    return (
        <section className={styles.wrapper}>
            <div className={styles.image}>
                <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/our/1/tablet.webp" alt="кухня" />
            </div>
            <div className={styles.formContainer}>
            <h2 className={styles.title}>{t('title')}</h2>
            <FormClient />
            </div>
        </section>
    )
}
