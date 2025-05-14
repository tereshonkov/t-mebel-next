import styles from './Portfolio.module.css';
export default function Portfolio() {
  return (
    <div className={styles.wrapper}>
        <div className={styles.item}>
            <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/1/tablet.webp" alt="" />
        </div>
        <div className={styles.item}>
            <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/4/tablet.webp" alt="" />
        </div>
        <div className={styles.item}>
            <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/6/tablet.webp" alt="" />
        </div>
        <div className={styles.item}>
            <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/7/tablet.webp" alt="" />
        </div>
        <div className={styles.item}>
            <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp" alt="" />
        </div>
        <div className={styles.item}>
            <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/1/tablet.webp" alt="" />
        </div>
    </div>
  )
}
