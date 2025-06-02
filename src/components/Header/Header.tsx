import styles from './Header.module.css';
import { Link } from '@/i18n/navigation';
import NavMobile from './NavMobile';
import { getTranslations } from 'next-intl/server';

export default async function Header() {
  const t = await getTranslations('header');
  return (
    <div className={styles.header}>
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Logo" />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.wrapperNav}>
          <Link href="/">{t('home')}</Link>
          <Link href="/service">{t('service')}</Link>
          <Link href="/about">{t('about')}</Link>
          <Link href="/contacts">{t('contacts')}</Link>
        </ul>
        <NavMobile />
      </nav>
      <div className={styles.langWrapper}>
        <img src="/lang.svg" alt="language" />
        <p>{t('language')}</p>
      </div>
    </div>
  )
}
