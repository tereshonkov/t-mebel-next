import styles from './Form.module.css';
import FormClient from './FormClient';

export default function Form() {
    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>Получите <span>бесплатную</span> консультацию уже <span>сегодня</span></h2>
            <FormClient />
        </section>
    )
}
