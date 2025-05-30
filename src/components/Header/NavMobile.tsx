"use client";
import styles from './Header.module.css';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
    <div onClick={toggleMenu} className={styles.menuMobile}>
      <img src="/menu-dark.svg" alt="menu" />
      <p>Меню</p>
    </div>
    {isOpen && (
      <nav className={styles.navMobile}>
        <button onClick={toggleMenu} className={styles.close}></button>
        <ul className={styles.wrapperNavMobile}>
          <Link href="/">Главная</Link>
          <Link href="/service">Наши работы</Link>
          <Link href="/about">Про нас</Link>
          <Link href="/contacts">Контакты</Link>
          <Link className={styles.active} href="tel:0671496741">Позвонить</Link>
        </ul>
      </nav>
    )}
    </>
  )
}
