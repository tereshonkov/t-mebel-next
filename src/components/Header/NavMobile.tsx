"use client";
import styles from './Header.module.css';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const t = useTranslations('header');
  return (
    <>
    <div onClick={toggleMenu} className={styles.menuMobile}>
      <img src="/menu-dark.svg" alt="menu" />
      <p>Меню</p>
    </div>
    {isOpen && (
      <nav className={styles.navMobile}>
              <div className={styles.langWrapperDark}>
        <img src="/lang-dark.svg" alt="language" />
        <p>{t('language')}</p>
      </div>
        <button onClick={toggleMenu} className={styles.close}></button>
        <ul className={styles.wrapperNavMobile}>
          <Link href="/">{t('home')}</Link>
          <Link href="/service">{t('service')}</Link>
          <Link href="/about">{t('about')}</Link>
          <Link href="/contacts">{t('contacts')}</Link>
          <Link className={styles.active} href="tel:0671496741">{t('call')}</Link>
        </ul>
      </nav>
    )}
    </>
  )
}
