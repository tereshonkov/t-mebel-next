import styles from './Header.module.css';
import { Link } from '@/i18n/navigation';
import NavMobile from './NavMobile';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.wrapperNav}>
          <Link href="/">Главная</Link>
          <Link href="/service">Наши работы</Link>
          <Link href="/about">Про нас</Link>
          <Link href="/contacts">Контакты</Link>
        </ul>
        <NavMobile />
      </nav>
      <button className={styles.btn}>Заказать</button>
    </div>
  )
}
