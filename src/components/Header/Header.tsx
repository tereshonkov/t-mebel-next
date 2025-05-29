import styles from './Header.module.css';
import { Link } from '@/i18n/navigation';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src="/logo.png" alt="Logo" />
        </div>
        <nav className={styles.nav}>
            <ul className={styles.wrapperNav}>
                <Link href="/">Главная</Link>
                <Link href="/service">Наши работы</Link>
                <Link href="/about">Про нас</Link>
                <Link href="/contacts">Контакты</Link>
            </ul>
        </nav>
        <button className={styles.btn}>Заказать</button>
    </header>
  )
}
