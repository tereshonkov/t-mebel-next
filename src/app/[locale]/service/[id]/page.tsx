import Footer from "@/components/Footer/Footer";
import Form from "@/components/Form/Form";
import Hero from "@/components/Hero/Hero";
import styles from './page.module.css';
import Link from "next/link";


export default function FurniturePage({ params }: any) {
  const { id } = params as { id: string };
  return (
    <>
      <Hero startIndex={2} page={true} />
      <main>
        <section className={styles.wrapper}>
          <div className={styles.slider}>
            <div className={styles.sliderMain}>
              <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/1/tablet.webp" alt="1" />
            </div>
            <div className={styles.track}>
              <div className={styles.trackItem}>
                <img src="https://storage.googleapis.com/t-mebel/Image/ourPage/modal/kitchen/1/tablet.webp" alt="2" />
              </div>
            </div>
            <div className={styles.sliderBtns}>
              <button className={styles.prev}></button>
              <button className={styles.next}></button>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.heading}>
              <h2 className={styles.title}>Кровать розкладная двухспальная {id}</h2>
              <div className={styles.stars}>
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
                <img src="/star.svg" alt="star" />
              </div>
            </div>
            <p className={styles.subtitle}>Двуспальная кровать с подъемным механизмом — это сочетание комфорта, стиля и практичности. Полноценное спальное место обеспечит здоровый и крепкий сон, а благодаря встроенному подъёмному механизму под матрасом открывается вместительная ниша для хранения постельного белья, одеял и других вещей. Прочная конструкция и современный дизайн делают эту кровать идеальным выбором для любой спальни.</p>
            <div className={styles.colorDiv}>
              <span className={styles.colorTitle}>Цвет:</span>
              <div className={styles.colors}>
              </div>
            </div>
            <p className={styles.width}>Размеры: </p>
            <p className={styles.furnitures}>Фурнитура: </p>
            <Link href="tel:0671496741" className={styles.link}>По всем вопросам звонить: 067 - 149 - 67 - 41</Link>
          </div>
        </section>
        <section className={styles.reviews}>
        <div className={styles.review}>
                    <div className={styles.reviewsHeading}>
            <h3 className={styles.name}>Ivan Ivanov</h3>
            <div className={styles.stars}>
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
            </div>
          </div>
          <p className={styles.body}>Очень удобная кровать — спать комфортно, механизм подъёма работает плавно, а ниша внутри действительно вместительная. Отличный вариант, особенно если нужно дополнительное место для хранения!</p>
        </div>
          <div>
            <button className={styles.btn}>Оставить отзыв</button>
          </div>
        </section>
        <Form />
      </main>
      <Footer />
    </>
  );
}
// import PageProps from 'next';

// export default function FurniturePage({ params }: PageProps<{ id: string }>) {
//   const { id } = params;
//   return (
//     <div>
//       <h1>Мебель с ID: {id}</h1>
//     </div>
//   );
// }