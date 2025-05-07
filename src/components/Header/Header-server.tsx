// This is a server component
// "use server"
import styles from './Header.module.css'
import NavClient from './Nav-client'
import {getTranslations} from 'next-intl/server';


export default function HeaderServer() {
    
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="logo" />
            </div>
            <nav>
                <NavClient/>
            </nav>

            <a className={styles.phone} href="tel:0671496741">Олександр 067-149-67-41</a>
        </div>
    )
}
