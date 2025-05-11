import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
          <h3>Мебель под заказ — удобно. стильно. индивидуально.</h3>
        </div>
        <nav className={styles.navFooter}>
          <ul className={styles.navContainer}>
            <Link href="#">Главная</Link>
            <Link href="#">Портфолио</Link>
            <Link href="#">О Компании</Link>
            <Link href="#">Блог</Link>
            <Link href="#">Отзывы клиентов</Link>
            <Link href="#">Контакты</Link>
          </ul>
        </nav>
        <div className={styles.contacts}>
          <div className={styles.phone}>
          <p>Пн-Сб с 9:00 до 19:00</p>
            <Link href="tel:0671496741">Телефон: (067)-149-67-41</Link>
          </div>
          <div className={styles.address}>
            <p>г. Харьков, ул. Льва Ландау 8</p>
          </div>
        </div>
        <div className={styles.social}>
          <Link href="https://www.instagram.com/">
            <img src="/insta.png" alt="Instagram" />
          </Link>
          <Link href="https://www.facebook.com/">
            <img src="/facebook.png" alt="Facebook" />
          </Link>
          <Link href="https://www.telegram.com/">
            <img src="/telegram.png" alt="Telegram" />
          </Link>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2023 Мебель на заказ t-mebel. Все права защищены.</p>
        <Link className={styles.link} href="#">Политика конфиденциальности</Link>
        <Link className={styles.link} href="#">Пользовательское соглашение</Link>
      </div>
    </footer>
  );
}
