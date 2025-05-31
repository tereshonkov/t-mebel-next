import styles from "./Furniture.module.css";
import Button from "../Button/Button";
import FurnitureClient from "./FurnitureClient";



export default function Slider() {

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Реализованные проэкты</h2>
      <FurnitureClient />
      <div>
        <Button link="#">Все работы</Button>
      </div>
    </section>
  );
}
