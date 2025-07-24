"use client";
import styles from './Header.module.css';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Language from '../Language/Language';

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
        <p>{t('menu')}</p>
      </div>
      {isOpen && (
        <nav className={styles.navMobile}>
          <Language mobile={true} />
          <button onClick={toggleMenu} className={styles.close}></button>
          <ul className={styles.wrapperNavMobile}>
            <li><Link href="/">{t('home')}</Link></li>
            <li><Link href="/service">{t('service')}</Link></li>
            <li><Link href="/about">{t('about')}</Link></li>
            <li><Link href="/contacts">{t('contacts')}</Link></li>
            <li><Link className={styles.active} href="tel:0671496741">{t('call')}</Link></li>
          </ul>
        </nav>
      )}
    </>
  )
}
