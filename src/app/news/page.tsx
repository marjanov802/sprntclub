import Link from 'next/link';
import { getSortedArticles } from '@/content/news';
import styles from './page.module.css';

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-GB', {
        day: 'numeric', month: 'long', year: 'numeric',
    });
}

const categoryColours: Record<string, string> = {
    Announcements: 'var(--pink)',
    Events: '#FF8C00',
    Community: '#00BFFF',
    Updates: '#ADFF2F',
};

export default function NewsPage() {
    const articles = getSortedArticles();
    const [featured, ...rest] = articles;

    return (
        <main className={styles.main}>

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <p className={styles.eyebrow}>Latest from the Club</p>
                    <h1 className={styles.heroTitle}>
                        <span className={styles.white}>Club </span>
                        <span className={styles.pink}>News</span>
                    </h1>
                </div>
            </section>

            {/* Featured Article */}
            {featured && (
                <section className={styles.featuredSection}>
                    <Link href={`/news/${featured.slug}`} className={styles.featuredCard}>
                        <div className={styles.featuredLeft}>
                            <div className={styles.imagePlaceholder}>
                                <span>Photo</span>
                            </div>
                        </div>
                        <div className={styles.featuredRight}>
                            <div className={styles.featuredMeta}>
                                <span
                                    className={styles.category}
                                    style={{ color: categoryColours[featured.category] }}
                                >
                                    {featured.category}
                                </span>
                                <span className={styles.date}>{formatDate(featured.date)}</span>
                            </div>
                            <h2 className={styles.featuredTitle}>{featured.title}</h2>
                            <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                            <span className={styles.readMore}>Read More →</span>
                        </div>
                    </Link>
                </section>
            )}

            {/* Article Grid */}
            {rest.length > 0 && (
                <section className={styles.gridSection}>
                    <div className={styles.grid}>
                        {rest.map((article) => (
                            <Link
                                key={article.slug}
                                href={`/news/${article.slug}`}
                                className={styles.card}
                            >
                                <div className={styles.cardImage}>
                                    <span>Photo</span>
                                </div>
                                <div className={styles.cardBody}>
                                    <div className={styles.cardMeta}>
                                        <span
                                            className={styles.category}
                                            style={{ color: categoryColours[article.category] }}
                                        >
                                            {article.category}
                                        </span>
                                        <span className={styles.date}>{formatDate(article.date)}</span>
                                    </div>
                                    <h3 className={styles.cardTitle}>{article.title}</h3>
                                    <p className={styles.cardExcerpt}>{article.excerpt}</p>
                                    <span className={styles.readMore}>Read More →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

        </main>
    );
}