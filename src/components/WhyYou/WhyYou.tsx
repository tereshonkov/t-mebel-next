import { MdApartment } from "react-icons/md";
import { PiHouseLineFill } from "react-icons/pi";
import { MdSelfImprovement } from "react-icons/md";
import { FaPenRuler } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import styles from "./WhyYou.module.css";
export default function WhyYou() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Кому підійдуть наші меблі</h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <MdApartment size={60} className={styles.icon} />
          <div className={styles.content}>
            <h3>Для власників квартир</h3>
            <p>Після ремонту або на етапі планування</p>
          </div>
        </div>
        <div className={styles.card}>
          <PiHouseLineFill size={60} className={styles.icon} />
          <div className={styles.content}>
            <h3>Для приватних будинків</h3>
            <p>Кухні, гардеробні, шафи та інші індивідуальні рішення</p>
          </div>
        </div>
        <div className={styles.card}>
          <FaPenRuler size={60} className={styles.icon} />
          <div className={styles.content}>
            <h3>Для тих, хто хоче результат</h3>
            <p>Не готові до типових рішень з магазину</p>
          </div>
        </div>
        <div className={styles.card}>
          <GiProgression size={60} className={styles.icon} />
          <div className={styles.content}>
            <h3>Для клієнтів, які цінують процес</h3>
            <p>Зрозумілі етапи, терміни та розрахунок</p>
          </div>
        </div>
      </div>
      <div>
        <p className={styles.note}>
          Ми працюємо з індивідуальними проєктами та не продаємо готові меблі
        </p>
      </div>
    </section>
  );
}
