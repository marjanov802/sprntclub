import styles from './page.module.css';
import Image from 'next/image';

// ─── Add your image filenames here ───────────────────────────────────────────
// Drop images into /public/images/gallery/ and list them below
// You can add as many as you like — the grid handles it automatically
const galleryImages = [
    '/images/gallery/1.jpg',
    '/images/gallery/2.jpg',
    '/images/gallery/3.jpg',
    '/images/gallery/4.jpg',
    '/images/gallery/5.jpg',
    '/images/gallery/6.jpg',
    '/images/gallery/8.jpg',
    '/images/gallery/9.jpg',
    '/images/gallery/10.jpg',
    '/images/gallery/11.jpg',
    '/images/gallery/12.jpg',
    '/images/gallery/13.jpg',
    '/images/gallery/14.jpg',
    '/images/gallery/15.jpg',
    '/images/gallery/16.jpg',
    '/images/gallery/17.jpg',
    '/images/gallery/18.jpg',
    '/images/gallery/19.jpg',
    '/images/gallery/20.jpg',
    '/images/gallery/21.jpg',
    '/images/gallery/22.jpg',
    '/images/gallery/23.jpg',
    '/images/gallery/24.jpg',
    '/images/gallery/25.jpg',
    '/images/gallery/26.jpg',
    '/images/gallery/27.jpg',
    '/images/gallery/28.jpg',
];
// ─────────────────────────────────────────────────────────────────────────────

export default function GalleryPage() {
    return (
        <main className={styles.main}>

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <p className={styles.eyebrow}>The Club in Action</p>
                    <h1 className={styles.heroTitle}>
                        <span className={styles.white}>Our</span>{' '}
                        <span className={styles.pink}>Gallery</span>
                    </h1>
                </div>
            </section>

            {/* Ticker */}
            <div className={styles.ticker}>
                <span>
                    SPRINT &nbsp;·&nbsp; COMPETE &nbsp;·&nbsp; WIN &nbsp;·&nbsp; REPEAT &nbsp;·&nbsp;
                    SPRINT &nbsp;·&nbsp; COMPETE &nbsp;·&nbsp; WIN &nbsp;·&nbsp; REPEAT &nbsp;·&nbsp;
                    SPRINT &nbsp;·&nbsp; COMPETE &nbsp;·&nbsp; WIN &nbsp;·&nbsp; REPEAT &nbsp;·&nbsp;
                </span>
            </div>

            {/* Masonry Grid */}
            <section className={styles.grid}>
                {galleryImages.map((src, i) => (
                    <div
                        key={i}
                        className={`${styles.cell} ${styles[`span${(i % 5) + 1}` as keyof typeof styles] ?? ''}`}
                    >
                        <Image
                            src={src}
                            alt={`SPRNTCLUB gallery image ${i + 1}`}
                            fill
                            className={styles.img}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className={styles.cellOverlay} />
                    </div>
                ))}
            </section>

            {/* Bottom CTA */}
            <section className={styles.cta}>
                <p className={styles.ctaSub}>Want to be part of the story?</p>
                <h2 className={styles.ctaTitle}>
                    Join us every <span className={styles.pink}>Tuesday</span>
                </h2>
                <a href="/tickets" className={styles.ctaBtn}>Get Your Ticket</a>
            </section>

        </main>
    );
}