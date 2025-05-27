import styles from './BlockService.module.css';
import Button from '../Button/Button';

export default function Item() {
  return (
    <div className={styles.item}>
    <div className={styles.image}>
        <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/1/tablet.webp" alt="" />
    </div>
    <div className={styles.text}>
        <h3>Кухня серая</h3>
        <p>Короткое описание</p>
        <Button dark link="#">Подробнее</Button>
    </div>
</div>
  )
}
