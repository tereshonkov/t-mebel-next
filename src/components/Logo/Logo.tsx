import styles from './Logo.module.css';

export default function Logo() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.logos}>
            <div className={styles.logo}>
                <img src="/logos/1.png" alt="logo" className={styles.image} />
            </div>
            <div className={styles.logo}>
                <img src="/logos/2.png" alt="logo" className={styles.image} />
            </div>
            <div className={styles.logo}>
                <img src="/logos/3.webp" alt="logo" className={styles.image} />
            </div>
            <div className={styles.logo}>
                <img src="/logos/1.png" alt="logo" className={styles.image} />
            </div>
            <div className={styles.logo}>
                <img src="/logos/2.png" alt="logo" className={styles.image} />
            </div>
            <div className={styles.logo}>
                <img src="/logos/3.webp" alt="logo" className={styles.image} />
            </div>
        </div>
    </section>
  )
}
