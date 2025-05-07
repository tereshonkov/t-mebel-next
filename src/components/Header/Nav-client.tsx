// This is a client component
'use client'
import styles from './Header.module.css'
import { useState } from 'react'
import { Link } from '../../i18n/navigation'
import { CgMenuRightAlt } from "react-icons/cg";
import { useTranslations } from 'use-intl';

export default function NavClient() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
const t = useTranslations('Navigation');


  return (
    <>
        <ul className={styles.nav}>
        <Link href="/">{t('home')}</Link>
        <Link href="/our">{t('ourWorks')}</Link>
        <Link href="/about">{t('about')}</Link>
        <Link href="/contacts">{t('contacts')}</Link>
        <Link href="/blog">{t('blog')}</Link>
        <Link href="/reviews">{t('reviews')}</Link>
    </ul>
    {isOpen && (
          <ul className={styles.mobile}>
        <Link href="/">{t('home')}</Link>
        <Link href="/our">{t('ourWorks')}</Link>
        <Link href="/about">{t('about')}</Link>
        <Link href="/contacts">{t('contacts')}</Link>
        <Link href="/blog">{t('blog')}</Link>
        <Link href="/reviews">{t('reviews')}</Link>
      </ul>
    )}
    <CgMenuRightAlt onClick={toggleMenu} className={styles.burger} />
    </>
  )
}
