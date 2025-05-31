import styles from "./Form.module.css";
import { Link } from "@/i18n/navigation";

export default function Form() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>
        Получите <span>бесплатную</span> консультацию уже <span>сегодня</span>
      </h2>
      <div className={styles.numberWrapper}>
        <h3 className={styles.number}>
            067 - 149 - 67 - 41
        </h3>
        <Link href="tel:0671496741" className={styles.btn}>
          Позвонить нам
        </Link>
      </div>
    </section>
  );
}
