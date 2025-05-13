import styles from './HeroService.module.css'

export default function HeroService() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.text}>
        <h2 className={styles.title}>Наши работы — результат индивидуального подхода</h2>
        <p className={styles.description}>Ознакомьтесь с реализованными проектами мебели на заказ: кухни, шкафы и другие изделия, созданные по индивидуальному дизайну. Каждая работа — это гармония стиля, функциональности и качества, созданная с учётом ваших потребностей и особенностей интерьера.</p>
      </div>
      <div className={styles.imgWrapper}>
        <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/6/tablet.webp" alt="кухня" />
      </div>
    </section>
  )
}
