import styles from './BlockService.module.css';
import Button from '../Button/Button';

export default function BlockService() {
  return (
    <section className={styles.wrapper}>
        <div className={styles.sidebar}>
            <h3>Выберите категорию</h3>
            <ul className={styles.lists}>
                <li>Кухни</li>
                <li>Шкафы</li>
                <li>Спальня</li>
                <li>Ванные комнаты</li>
                <li>Магазины</li>
            </ul>
        </div>
        <div className={styles.container}>
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
        </div>
    </section>
  )
}
