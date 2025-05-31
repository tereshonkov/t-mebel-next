import styles from "./Faq.module.css";
import Accordion from "./Accordion";

export default function Faq() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.titleWrapper}>
        <h2 className={styles.title}>Часто <span>задаваемые вопросы</span></h2>
        <p>Если вы не нашли ответ на свой вопрос вы можете к нам обратится по телефону или же через форму на сайте</p>  
        </div>
        <Accordion />
    </div>
  )
}
