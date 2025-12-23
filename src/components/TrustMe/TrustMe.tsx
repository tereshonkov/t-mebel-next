import styles from "./TrustMe.module.css";
import { FaCalculator } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineControlCamera } from "react-icons/md";
import { GiGreatPyramid } from "react-icons/gi";

export default function TrustMe() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <FaCalculator className={styles.icon} size={60} />
        <div className={styles.content}>
          <h3>Чіткий розрахунок</h3>
          <p>Бюджет до початку робіт, без сюрпризів</p>
        </div>
      </div>
      <div className={styles.card}>
        <GoProjectRoadmap className={styles.icon} size={60} />
        <div className={styles.content}>
          <h3>Проєкт під простір</h3>
          <p>Меблі під ваші розміри та планування</p>
        </div>
      </div>
      <div className={styles.card}>
        <MdOutlineControlCamera className={styles.icon} size={60} />
        <div className={styles.content}>
          <h3>Контроль етапів</h3>
          <p>Ви знаєте, на якому етапі проєкт</p>
        </div>
      </div>
      <div className={styles.card}>
        <GiGreatPyramid className={styles.icon} size={60} />
        <div className={styles.content}>
          <h3>Відповідальність</h3>
          <p>Від проєкту до монтажу</p>
        </div>
      </div>
    </section>
  );
}
