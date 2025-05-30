import styles from "./Furniture.module.css";
import Button from "../Button/Button";

export default function Slider() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Реализованные проэкты</h2>
      <div className={styles.container}>
        
      </div>
      <div>
        <Button link="#">Все работы</Button>
      </div>
    </section>
  );
}
