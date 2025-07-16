import Link from 'next/link';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.content}>
            <h2 className={styles.title}>О нас</h2>

            <div className={styles.description}>
              <p>Мы — команда специалистов с многолетним опытом в изготовлении мебели на заказ. Работаем с 2006 года, предлагая функциональные, стильные и удобные решения для дома, офиса и коммерческих пространств.</p>
              <p>Наша основная специализация — корпусная мебель: кухни, шкафы-купе, кровати, гостиные, гардеробные и многое другое. Мы учитываем индивидуальные пожелания каждого клиента и используем только качественные материалы и фурнитуру.</p>
              <p>Наша цель — создавать комфорт в каждом интерьере и упрощать выбор мебели, которая действительно подходит вам.</p>
            </div>

            <h3 className={styles.contact}>Контакты</h3>

            <Link className={styles.tel} href="tel:0671496741">Телефон: 067 - 149 - 67 - 41</Link>

            <div className={styles.socials}>
                <Link className={styles.instagram} href="https://www.facebook.com/" target="_blank"></Link>
                <Link className={styles.telegram} href="https://www.instagram.com/" target="_blank"></Link>
                <Link className={styles.facebook} href="https://www.linkedin.com/" target="_blank"></Link>
            </div>
        </div>
        <div className={styles.images}>
          <div className={styles.imageOne}>
            <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/modern/1/tablet.webp" alt="table" />
          </div>
          <div className={styles.imageTwo}>
            <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp" alt="kitchen" />
          </div>
        </div>
    </section>
  )
}
