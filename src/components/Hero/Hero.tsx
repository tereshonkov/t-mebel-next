import styles from './Hero.module.css'
import Header from '../Header/Header';
import { Link } from '@/i18n/navigation';
import HeroCarusel from './HeroCarusel';


export default function Hero() {
  return (
    <header className={styles.wrapper}>
      <Header />
      <HeroCarusel />
    <div className={styles.wrapperContent}>
          <div className={styles.banner}>
          <div className={styles.banerWrapper}>
      <div className={styles.bannerText}>
        <h2>Мебель под заказ</h2>
        <p>Мебель на заказ — искусство уюта и стиля.</p>
      </div>
      <div className={styles.bannerButton}>
        <a href='tel:0671496741' className={styles.btn}>Звонок</a>
        <Link href="/contacts" className={styles.btnSecond}>Контакты</Link>
      </div>
    </div>
    </div>
    <h1 className={styles.title}>Создайте пространство, которое отражает <span>вашу мечту</span></h1>
    </div>
  </header>
  )
}
