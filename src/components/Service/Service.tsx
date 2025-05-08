import styles from './Service.module.css'

export default function Service() {
  return (
    <section className={styles.service}>
        <div className={styles.first}>
            <div className={styles.imgWrapper}>
                <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/5384567338008963271.webp" alt="Кухня під замовлення в двух кольорах" />
            </div>
            <div className={styles.textWrapper}>
                <h2 className={styles.title}>Ідеальні кухні під замовлення — стиль, функціональність та якість</h2>
                <p className={styles.subtitle}>Пропонуємо кухні під замовлення, які відповідають вашим бажанням і простору. Кожен проєкт — це індивідуальний підхід, продуманий до дрібниць: від розміщення техніки до вибору матеріалів. Ми виготовляємо кухні на замовлення, які поєднують комфорт, ергономіку та сучасний дизайн, щоб щоденне приготування їжі приносило радість.</p>

            </div>
        </div>
        <div className={styles.second}>
            <div className={styles.textWrapper}>
            <h2 className={styles.title}>Функціональні шафи на замовлення для будь-якого інтер’єру</h2>
            <p className={styles.subtitle}>Розробляємо шафи під замовлення, які максимально ефективно використовують ваш простір. Кутові, вбудовані, розсувні або класичні — ми створюємо шафи на замовлення, які доповнюють інтер’єр, забезпечують порядок і гармонію в домі. Обирайте меблі, які працюють на вас!</p>
            </div>
            <div className={styles.imgWrapper}>
                <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/shafa/7/tablet.webp" alt="шафа з розсувними дверями та додатковими поличками" />
            </div>
        </div>
    </section>
  )}
