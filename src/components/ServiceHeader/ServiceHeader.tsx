import styles from './ServiceHeader.module.css'

export default function ServiceHeader() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.image}>
            <h2 className={styles.title}>Наши работы результат индивидуального подхода</h2>
        </div>
    </section>
  )
}
