'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import ImageCarousel from '@/components/imagecarousel';

// ─── Add your image filenames here ───────────────────────────────────────────
const ticketImages = [
    '/images/tickets/1.jpg',
    '/images/tickets/2.jpg',
    '/images/tickets/3.jpg',
    '/images/tickets/4.jpg',
];
// ─────────────────────────────────────────────────────────────────────────────

function getNextWednesday6pm(): Date {
    const now = new Date();
    const day = now.getDay();
    const daysUntilWed = (3 - day + 7) % 7 || 7;
    const next = new Date(now);
    next.setDate(now.getDate() + daysUntilWed);
    next.setHours(18, 0, 0, 0);
    return next;
}

function getFollowingTuesday(wed: Date): Date {
    const tue = new Date(wed);
    tue.setDate(wed.getDate() + 6);
    tue.setHours(20, 0, 0, 0);
    return tue;
}

function formatCountdown(ms: number) {
    if (ms <= 0) return { days: '00', hours: '00', mins: '00', secs: '00' };
    const s = Math.floor(ms / 1000);
    return {
        days: String(Math.floor(s / 86400)).padStart(2, '0'),
        hours: String(Math.floor((s % 86400) / 3600)).padStart(2, '0'),
        mins: String(Math.floor((s % 3600) / 60)).padStart(2, '0'),
        secs: String(s % 60).padStart(2, '0'),
    };
}

function formatDate(date: Date): string {
    return date.toLocaleDateString('en-GB', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    });
}

export default function TicketsPage() {
    const [mounted, setMounted] = useState(false);
    const [releaseDate, setReleaseDate] = useState<Date | null>(null);
    const [sessionDate, setSessionDate] = useState<Date | null>(null);
    const [countdown, setCountdown] = useState({ days: '00', hours: '00', mins: '00', secs: '00' });
    const [released, setReleased] = useState(false);

    useEffect(() => {
        const rd = getNextWednesday6pm();
        const sd = getFollowingTuesday(rd);
        setReleaseDate(rd);
        setSessionDate(sd);
        setMounted(true);

        const tick = () => {
            const diff = rd.getTime() - Date.now();
            setCountdown(formatCountdown(diff));
            setReleased(diff <= 0);
        };

        tick();
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <main className={styles.main}>

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroLeft}>
                    <p className={styles.eyebrow}>Weekly Sessions</p>
                    <h1 className={styles.heroTitle}>
                        Buy <span className={styles.pink}>Tickets</span>
                    </h1>
                    <p className={styles.heroSub}>
                        Tickets drop every Wednesday at 6pm for the following Tuesday session.
                        Spots are limited — be ready when they go live.
                    </p>
                </div>
                <div className={styles.heroImage}>
                    <ImageCarousel images={ticketImages} interval={4000} alt="SPRNTCLUB session" />
                </div>
            </section>

            {/* Session Card */}
            <section className={styles.sessionSection}>
                <p className={styles.sectionEyebrow}>Next Session</p>
                <h2 className={styles.sectionTitle}>This <span className={styles.pink}>Week</span></h2>

                <div className={styles.sessionCard}>
                    <div className={styles.sessionLeft}>
                        <div className={styles.sessionDetail}>
                            <span className={styles.detailLabel}>Session Date</span>
                            <span className={styles.detailValue}>
                                📅 {mounted && sessionDate ? formatDate(sessionDate) : '—'}
                            </span>
                        </div>
                        <div className={styles.sessionDetail}>
                            <span className={styles.detailLabel}>Kick Off</span>
                            <span className={styles.detailValue}>⏰ 8:00pm</span>
                        </div>
                        <div className={styles.sessionDetail}>
                            <span className={styles.detailLabel}>Price</span>
                            <span className={styles.detailValueBig}>£6</span>
                        </div>
                    </div>

                    <div className={styles.sessionRight}>
                        {!mounted ? (
                            <p className={styles.releaseLabel}>Loading...</p>
                        ) : released ? (
                            <>
                                <p className={styles.releaseLabel}>
                                    Tickets are <span className={styles.pink}>live!</span>
                                </p>
                                <button className={styles.bookBtn}>Book Now — £6</button>
                            </>
                        ) : (
                            <>
                                <p className={styles.releaseLabel}>Tickets drop in</p>
                                <div className={styles.countdown}>
                                    <div className={styles.countUnit}>
                                        <span className={styles.countNum}>{countdown.days}</span>
                                        <span className={styles.countLabel}>Days</span>
                                    </div>
                                    <span className={styles.countSep}>:</span>
                                    <div className={styles.countUnit}>
                                        <span className={styles.countNum}>{countdown.hours}</span>
                                        <span className={styles.countLabel}>Hours</span>
                                    </div>
                                    <span className={styles.countSep}>:</span>
                                    <div className={styles.countUnit}>
                                        <span className={styles.countNum}>{countdown.mins}</span>
                                        <span className={styles.countLabel}>Mins</span>
                                    </div>
                                    <span className={styles.countSep}>:</span>
                                    <div className={styles.countUnit}>
                                        <span className={styles.countNum}>{countdown.secs}</span>
                                        <span className={styles.countLabel}>Secs</span>
                                    </div>
                                </div>
                                <p className={styles.releaseDate}>
                                    Available {mounted && releaseDate ? formatDate(releaseDate) : '—'} at 6:00pm
                                </p>
                                <button className={styles.bookBtnDisabled} disabled>
                                    Not Yet Available
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className={styles.infoStrip}>
                <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📅</span>
                    <span className={styles.infoLabel}>Tickets drop every Wednesday at 6pm</span>
                </div>
                <div className={styles.infoDivider} />
                <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🏃</span>
                    <span className={styles.infoLabel}>Session every Tuesday at 8pm</span>
                </div>
                <div className={styles.infoDivider} />
                <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>💷</span>
                    <span className={styles.infoLabel}>Just £6 per session</span>
                </div>
                <div className={styles.infoDivider} />
                <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>⚡</span>
                    <span className={styles.infoLabel}>Limited spots — don&apos;t miss out</span>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.faqSection}>
                <p className={styles.sectionEyebrow}>Got Questions?</p>
                <h2 className={styles.sectionTitle}>FAQs</h2>
                <div className={styles.faqGrid}>
                    {[
                        { q: 'When do tickets go on sale?', a: "Tickets drop every Wednesday at 6pm for the following Tuesday's session. Set a reminder — they go fast." },
                        { q: 'What time does the session start?', a: 'Sessions kick off every Tuesday at 8pm. We recommend arriving 10–15 minutes early to warm up.' },
                        { q: 'How much does it cost?', a: 'Each session is just £6. No membership, no commitment — just show up and sprint.' },
                        { q: 'Who can come?', a: "Everyone is welcome regardless of ability. Whether you're a seasoned sprinter or just starting out, SPRNTCLUB is for you." },
                        { q: 'What do I need to bring?', a: 'Your digital ticket (screenshot or email), appropriate running kit, and flat or spiked running shoes.' },
                        { q: 'Can I get a refund?', a: 'Tickets are non-refundable but can be transferred to someone else up to 24 hours before the session.' },
                    ].map((faq, i) => (
                        <div key={i} className={styles.faqCard}>
                            <h4 className={styles.faqQ}>{faq.q}</h4>
                            <p className={styles.faqA}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}