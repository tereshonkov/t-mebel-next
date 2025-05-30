"use client";
import styles from './Hero.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback } from 'react';
import heroData from './heroData';

export default function HeroCarusel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        skipSnaps: false,
        dragFree: false,
        containScroll: 'trimSnaps',
    });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
    }, [emblaApi]);
    return (
        <>
            <div className={styles.backgroundImg} ref={emblaRef}>
                <div className={styles.emblaTrack}>
                    {heroData.map((item, index) => (
                        <div className={styles.emblaSlide} key={index}>
                            <img
                                decoding="async"
                                data-fetchpriority="high"
                                src={item} // LQIP изображение
                                alt={`hero-image-${index}`}
                                srcSet={`${item} 1920w, ${item} 1024w, ${item} 768w`}
                                loading="eager"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.sliderBtns}>
                <button onClick={scrollPrev} className={styles.prev}></button>
                <button onClick={scrollNext} className={styles.next}></button>
            </div>
        </>
    )
}
