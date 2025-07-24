"use client";
import styles from './Hero.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useCallback } from 'react';
import heroData from './heroData';
import { useTranslations } from 'next-intl';

export default function HeroCarusel({    initialIndex = 0 }: { initialIndex?: number }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        skipSnaps: false,
        dragFree: false,
        containScroll: 'trimSnaps',
        startIndex: initialIndex,
    });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
    }, [emblaApi]);

    const t = useTranslations('label');
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
                <button onClick={scrollPrev} aria-label={t('prev')} className={styles.prev}></button>
                <button onClick={scrollNext} aria-label={t('next')} className={styles.next}></button>
            </div>
        </>
    )
}
