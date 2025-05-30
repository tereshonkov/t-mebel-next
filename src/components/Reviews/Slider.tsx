"use client";
import styles from './Reviews.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback } from 'react';
import reviewsData from './reviewsData';

export default function Slider() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
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
        <div className={styles.sliderWrapper}>
            <button onClick={scrollPrev} className={styles.prev}></button>
            <div className={styles.cards} ref={emblaRef}>
                <div className={styles.emblaTrack}>
                    {reviewsData.map((review, index) => (
                        <div className={styles.emblaSlide} key={index}>
                            <div className={styles.card}>
                                <img className={styles.cardImage} src={review.image} alt="picture" />
                                <div className={styles.cardContent}>
                                    <h3 className={styles.name}>{review.name}</h3>
                                    <p className={styles.text}>{review.text}</p>
                                    <div className={styles.stars}>
                                        <img src="/star.svg" alt="star" />
                                        <img src="/star.svg" alt="star" />
                                        <img src="/star.svg" alt="star" />
                                        <img src="/star.svg" alt="star" />
                                        <img src="/star.svg" alt="star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={scrollNext} className={styles.next}></button>
        </div>
    )
}
