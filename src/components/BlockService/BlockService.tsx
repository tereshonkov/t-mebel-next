import styles from './BlockService.module.css';
import Item from './Item';

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
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    </section>
  )
}
