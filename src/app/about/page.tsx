import styles from './page.module.css';
import ImageCarousel from '@/components/imagecarousel';

// ─── Add your image filenames here ───────────────────────────────────────────
// Drop images into /public/images/about/ and list them below
const foundersImages = [
    '/images/about/founders-1.jpg',
    '/images/about/founders-2.jpg',
    '/images/about/founders-3.jpg',
];

const teamImages = [
    '/images/about/team-1.jpg',
    '/images/about/team-2.jpg',
    '/images/about/team-3.jpg',
];

const galleryStripImages = [
    ['/images/about/strip-1.jpg', '/images/about/strip-2.jpg'],
    ['/images/about/strip-3.jpg', '/images/about/strip-4.jpg'],
    ['/images/about/strip-5.jpg', '/images/about/strip-6.jpg'],
    ['/images/about/strip-7.jpg', '/images/about/strip-8.jpg'],
];
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
    return (
        <main className={styles.main}>

            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <p className={styles.heroEyebrow}>Who We Are</p>
                    <h1 className={styles.heroTitle}>Our <span className={styles.pink}>Story</span></h1>
                </div>
            </section>

            {/* Origin Story */}
            <section className={styles.section}>
                <div className={styles.twoCol}>
                    <div className={styles.carouselWrapper}>
                        <ImageCarousel images={foundersImages} interval={4000} alt="Founders" />
                    </div>
                    <div className={styles.textBlock}>
                        <p className={styles.eyebrow}>How It Started</p>
                        <h2 className={styles.sectionTitle}>A couple. A track. A dream.</h2>
                        <p className={styles.body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className={styles.body}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quote Divider */}
            <section className={styles.quoteBanner}>
                <blockquote className={styles.quote}>
                    &ldquo;We didn&apos;t just want to run faster — we wanted to build a community that moves together.&rdquo;
                </blockquote>
                <p className={styles.quoteAuthor}>— Founders, SPRNTCLUB</p>
            </section>

            {/* The Mission */}
            <section className={styles.section}>
                <div className={styles.twoColReverse}>
                    <div className={styles.textBlock}>
                        <p className={styles.eyebrow}>The Mission</p>
                        <h2 className={styles.sectionTitle}>Built for <span className={styles.pink}>speed</span>, built for all.</h2>
                        <p className={styles.body}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant
                            morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
                        </p>
                        <p className={styles.body}>
                            Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est.
                            Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
                        </p>
                    </div>
                    <div className={styles.carouselWrapper}>
                        <ImageCarousel images={teamImages} interval={3500} alt="Team" />
                    </div>
                </div>
            </section>

            {/* Stats Row */}
            <section className={styles.statsSection}>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>2019</span>
                    <span className={styles.statLabel}>Founded</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>Members</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                    <span className={styles.statNumber}>40+</span>
                    <span className={styles.statLabel}>Events Hosted</span>
                </div>
                <div className={styles.statDivider} />
                <div className={styles.stat}>
                    <span className={styles.statNumber}>12</span>
                    <span className={styles.statLabel}>City Locations</span>
                </div>
            </section>

            {/* Gallery Strip — each cell is its own mini carousel */}
            <section className={styles.galleryStrip}>
                {galleryStripImages.map((pair, i) => (
                    <div key={i} className={styles.galleryItem}>
                        <ImageCarousel images={pair} interval={3000 + i * 500} alt={`Gallery ${i + 1}`} />
                    </div>
                ))}
            </section>

            {/* Closing CTA */}
            <section className={styles.cta}>
                <h2 className={styles.ctaTitle}>Ready to <span className={styles.pink}>run</span> with us?</h2>
                <a href="/tickets" className={styles.ctaBtn}>Get Your Tickets</a>
            </section>

        </main>
    );
}