import styles from './Slider.module.css';
import Carusel from '../Carusel/Carusel';
import Button from '../Button/Button';

export default function Slider() {
  return (
    <section className={styles.wrapper}>
        <h2 className={styles.title}>Последние работы</h2>
        <Carusel />
        <div>
        <Button link="#">Наши Работы</Button>
        </div>
    </section>
  )
}
