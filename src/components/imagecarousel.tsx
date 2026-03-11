'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './imagecarousel.module.css';

interface ImageCarouselProps {
    images: string[];        // array of paths e.g. ['/images/gallery/1.jpg', ...]
    interval?: number;       // ms between transitions, default 3500
    alt?: string;
    className?: string;
}

export default function ImageCarousel({
    images,
    interval = 3500,
    alt = 'SPRNTCLUB',
    className = '',
}: ImageCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [fading, setFading] = useState(false);

    useEffect(() => {
        if (images.length <= 1) return;

        const timer = setInterval(() => {
            setFading(true);
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % images.length);
                setFading(false);
            }, 400); // fade-out duration
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    if (!images.length) {
        return (
            <div className={`${styles.placeholder} ${className}`}>
                <span>No images found</span>
            </div>
        );
    }

    return (
        <div className={`${styles.carousel} ${className}`}>
            <Image
                src={images[current]}
                alt={`${alt} ${current + 1}`}
                fill
                className={`${styles.image} ${fading ? styles.fading : ''}`}
                style={{ objectFit: 'cover' }}
            />

            {/* Dot indicators */}
            {images.length > 1 && (
                <div className={styles.dots}>
                    {images.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to image ${i + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}