// This is a server component
// "use server"
import styles from './Header.module.css'
import NavClient from './Nav-client'
import { getTranslations } from 'next-intl/server';
import Button from '../Button/Button';


export default async function HeaderServer() {

    const t = await getTranslations('Header-contact');
    
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="logo" />
            </div>
            <nav>
                <NavClient/>
            </nav>

            {/* <a className={styles.phone} href="tel:0671496741">{t('contact')}</a> */}
            <Button link='tel:0671496741'>{t('contact')}</Button>
        </header>
    )
}
