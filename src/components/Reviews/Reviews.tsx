import styles from './Reviews.module.css'
import { getTranslations } from 'next-intl/server'
import Button from '../Button/Button'

export default async function Reviews() {
  const t = await getTranslations('Reviews')
  return (
    <section className={styles.wrapper}>
        <div className={styles.header}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.description}>{t('description')}</p>
        </div>
        <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={styles.name}>Оксана</h3>
              <p className={styles.text}>
              Когда заказывали шкаф-купе, честно, переживали, что не получится, как на картинках. Но ребята нас приятно удивили! Всё сделали под наши размеры, материалы отличные, и качество сборки - без нареканий. Приехали, всё установили быстро и без лишних вопросов. Идеально вписался в нашу спальню. Спасибо, будем заказывать ещё!
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.name}>Светлана</h3>
              <p className={styles.text}>
              Я вообще не планировала заказывать кухню под заказ, думала, что всё это будет дорого и долго. Но ребята из этой компании меня убедили. Сделали мне красивую кухню по моим размерам, быстро, и что главное — они реально учли все мои пожелания! Я довольна качеством, кухней пользуюсь уже несколько месяцев, и ни разу не пожалела. Кстати, монтаж тоже прошёл без проблем. Так что советую, если хотите индивидуальный подход.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.name}>Олексій</h3>
              <p className={styles.text}>Замовляли стелажі для нашого магазину, і ми просто в захваті! Потрібно було знайти рішення, яке поєднувало б зручність та стиль, і хлопці впоралися на 100%! Вони створили стелажі, які не тільки виглядають сучасно, а й зручні для організації товарів. Все було зроблено точно в терміни, якісно і з урахуванням наших вимог. Тепер наш магазин виглядає набагато організованіше, а клієнти відзначають, що їм легше знайти потрібний товар. Дуже задоволені результатом!</p>
            </div>
        </div>
        <div className={styles.btn}>
        <Button link='#' dark>{t('button')}</Button>
        </div>
    </section>
  )
}
