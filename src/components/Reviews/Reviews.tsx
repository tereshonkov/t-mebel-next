import styles from './Reviews.module.css'
// import Button from '../Button/Button'
import Slider from './Slider'

export default function Reviews() {

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>Ваши отзывы вдохновляют нас</h2>
      </div>
        <Slider />
      {/* <div className={styles.btn}>
        <Button link='#'>Оставить отзыв</Button>      
      </div> */}
    </section>
  )
}
