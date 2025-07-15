"use client";
import styles from "./FullPage.module.css";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import useEmblaCarousel from 'embla-carousel-react';

type Data = {
  id: number;
  title: string;
  description: string;
  color: string;
  furnitures: string;
  image: string;
  images: string[];
  width?: number;
  height?: number;
  raiting?: number;
  categories?: string[];
  reviews?: Review[];
};
type Review = {
  name: string;
  text: string;
  image: string;
};

export default function FullPage({ id }: { id: string }) {
  const [data, setData] = useState<Data | null>(null);
  console.log("FurniturePage data:", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const items: Data[] = await response.json();
        const item = items.find(item => item.id === parseInt(id));
        if (item) {
          setData(item);
        } else {
          console.error(`Item with id ${id} not found`);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id])

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.slider} >
          <div className={styles.emblaViewport} ref={emblaRef}>
            <div className={styles.emblaContainer}>
              {data?.images?.map((img, index) => (
                <div key={index} className={styles.sliderMain}>
                  <img src={img} alt={data?.title} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.track}>
            {data?.images.map((image, index) => (
              <div onClick={() => emblaApi?.scrollTo(index)}
                key={index} className={styles.trackItem}>
                <img src={image} alt={data?.title} />
              </div>
            ))}
          </div>

          <div className={styles.sliderBtns}>
            <button onClick={scrollPrev} className={styles.prev}></button>
            <button onClick={scrollNext} className={styles.next}></button>
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.heading}>
            <h2 className={styles.title}>
              {data?.title}
            </h2>
            <div className={styles.stars}>
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
              <img src="/star.svg" alt="star" />
            </div>
          </div>
          <p className={styles.subtitle}>
            {data?.description}
          </p>
          <p className={styles.width}>Размеры: {data?.width} x {data?.height}</p>
          <p className={styles.furnitures}>Фурнитура: {data?.furnitures}</p>
          <Link href="tel:0671496741" className={styles.link}>
            По всем вопросам звонить: 067 - 149 - 67 - 41
          </Link>
        </div>
      </section>
      <section className={styles.reviews}>
        {data?.reviews?.map((review, index) => (
                  <div key={index} className={styles.review}>
                  <div className={styles.reviewsHeading}>
                    <h3 className={styles.name}>{review.name}</h3>
                    <div className={styles.stars}>
                      <img src="/star.svg" alt="star" />
                      <img src="/star.svg" alt="star" />
                      <img src="/star.svg" alt="star" />
                      <img src="/star.svg" alt="star" />
                      <img src="/star.svg" alt="star" />
                    </div>
                  </div>
                  <p className={styles.body}>
                    {review.text}
                  </p>
                </div>
        ))}
        <div>
          <button className={styles.btn}>Оставить отзыв</button>
        </div>
      </section>
    </>
  );
}
