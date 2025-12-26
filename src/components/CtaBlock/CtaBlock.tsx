import Button from "../Button/Button";
import styles from "./CtaBlock.module.css";

export default function CtaBlock() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img
            src="http://localhost:3000/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Ft-mebel%2FImage%2FourPage%2Fmodal%2Fkitchen%2F4%2Ftablet.webp&w=1080&q=75"
            alt="кухня мдф крашеный глянцевый"
          />
        </div>
        <div className={styles.content}>
          <h2>Скільки насправді коштуватимуть ваші меблі?</h2>
          <p>
            Типові ціни за погонний метр часто вводять в оману. Ми підготуємо
            персональну пропозицію, де врахуємо кожен міліметр вашого простору,
            надійність фурнітури та реальний бюджет — без прихованих платежів на
            етапі монтажу
          </p>
          <Button className={styles.ctaButton}>Отримати розрахунок</Button>
        </div>
      </div>
    </section>
  );
}
