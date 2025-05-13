import styles from './Portfolio.module.css';

export default function Portfolio() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.btns}>
                <button className={styles.btn}>Все работы</button>
                <button className={styles.btn}>Кухни</button>
                <button className={styles.btn}>Шкафы</button>
                <button className={styles.btn}>Разное</button>
            </div>
            <div className={styles.items}>
                <div className={styles.item}>
                    <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp" alt="Кухня" />
                    <div className={styles.text}>
                        <h3>Кухня</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore magnam, nemo vero libero impedit voluptatem, deserunt veritatis reprehenderit in earum perferendis aliquam fugit placeat! Id, ullam modi. Iste, aspernatur?
                       </p>
                        <button className={styles.btnItem}>Открыть</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
