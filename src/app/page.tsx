import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Video Background */}
      <div className={styles.videoWrapper}>
        <video
          className={styles.video}
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className={styles.overlay} />
      </div>

      {/* Hero Content */}
      <div className={styles.content}>
        <p className={styles.tagline}>EST. 2024 &mdash; SPEED IS A LIFESTYLE</p>

        <h1 className={styles.heading}>
          <span className={styles.headingWhite}>SPRNT</span>
          <span className={styles.headingPink}>CLUB</span>
        </h1>

        <p className={styles.sub}>
          Push limits. Break barriers. Run faster.
        </p>

        <div className={styles.actions}>
          <Link href="/tickets" className={styles.btnPrimary}>
            Get Tickets
          </Link>
          <Link href="/about" className={styles.btnSecondary}>
            Our Story
          </Link>
        </div>
      </div>

      {/* Bottom strip */}
      <div className={styles.strip}>
        <span>SPRINT &nbsp;·&nbsp; COMPETE &nbsp;·&nbsp; WIN &nbsp;·&nbsp; REPEAT &nbsp;·&nbsp; SPRINT &nbsp;·&nbsp; COMPETE &nbsp;·&nbsp; WIN &nbsp;·&nbsp; REPEAT &nbsp;·&nbsp; SPRINT &nbsp;·&nbsp; COMPETE &nbsp;·&nbsp; WIN &nbsp;·&nbsp; REPEAT</span>
      </div>
    </main>
  );
}