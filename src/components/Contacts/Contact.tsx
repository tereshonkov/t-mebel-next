import styles from "./Contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.contact}>
        <h2 className={styles.titleContact}>Контакты</h2>
        <p className={styles.textContact}>г. Харьков проспект Льва Ландау 8</p>
        <p className={styles.textContact}>Телефон: 067 - 149 - 67 - 41</p>
        <div className={styles.socials}>
          <p className={styles.textContact}>Социальные сети: </p>
          <div className={styles.socialWrapper}>
            <Link href="#" target="_blank" className={styles.instagram}></Link>
            <Link href="#" target="_blank" className={styles.telegram}></Link>
            <Link href="#" target="_blank" className={styles.facebook}></Link>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <h2 className={styles.titleForm}>Контактная форма</h2>
        <form className={styles.formContact}>
          <input
            type="text"
            placeholder="Ваше имя"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Ваш Телефон"
            className={styles.input}
            required
          />
          <textarea
            placeholder="Ваше сообщение"
            className={styles.textarea}
            required
          ></textarea>
          <button type="submit" className={styles.button}>
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}
