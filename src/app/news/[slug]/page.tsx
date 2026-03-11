import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getArticleBySlug, getSortedArticles } from '@/content/news';
import styles from './page.module.css';

// Pre-generate all article routes at build time
export function generateStaticParams() {
    return getSortedArticles().map((a) => ({ slug: a.slug }));
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-GB', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    });
}

const categoryColours: Record<string, string> = {
    Announcements: 'var(--pink)',
    Events: '#FF8C00',
    Community: '#00BFFF',
    Updates: '#ADFF2F',
};

// Render body text: blank lines become paragraph breaks, **text** becomes bold
function renderBody(body: string) {
    const paragraphs = body.trim().split(/\n\n+/);
    return paragraphs.map((para, i) => {
        const trimmed = para.trim();
        if (!trimmed) return null;

        // Bold headings — lines starting with **
        if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
            return (
                <h3 key={i} className={styles.bodyHeading}>
                    {trimmed.slice(2, -2)}
                </h3>
            );
        }

        // Inline bold within paragraphs
        const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
        return (
            <p key={i} className={styles.bodyPara}>
                {parts.map((part, j) =>
                    part.startsWith('**') && part.endsWith('**')
                        ? <strong key={j}>{part.slice(2, -2)}</strong>
                        : part
                )}
            </p>
        );
    });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);
    if (!article) notFound();

    const allArticles = getSortedArticles();
    const others = allArticles.filter((a) => a.slug !== article.slug).slice(0, 2);

    return (
        <main className={styles.main}>

            {/* Back link */}
            <div className={styles.backWrap}>
                <Link href="/news" className={styles.back}>← Back to News</Link>
            </div>

            {/* Article Header */}
            <header className={styles.header}>
                <div className={styles.headerMeta}>
                    <span
                        className={styles.category}
                        style={{ color: categoryColours[article.category] }}
                    >
                        {article.category}
                    </span>
                    <span className={styles.date}>{formatDate(article.date)}</span>
                </div>
                <h1 className={styles.title}>{article.title}</h1>
                <p className={styles.excerpt}>{article.excerpt}</p>
            </header>

            {/* Article Image */}
            <div className={styles.heroImage}>
                {article.image ? (
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes='100vw'
                    />
                ) : (
                    <span className={styles.imgPlaceholder}>Photo</span>
                )}
            </div>

            {/* Article Body */}
            <article className={styles.body}>
                {renderBody(article.body)}
            </article>

            {/* Divider */}
            <div className={styles.divider} />

            {/* More Articles */}
            {others.length > 0 && (
                <section className={styles.moreSection}>
                    <p className={styles.moreEyebrow}>Keep Reading</p>
                    <div className={styles.moreGrid}>
                        {others.map((a) => (
                            <Link key={a.slug} href={`/news/${a.slug}`} className={styles.moreCard}>
                                <div className={styles.moreImage}>
                                    {a.image ? (
                                        <Image src={a.image} alt={a.title} fill style={{ objectFit: 'cover' }} sizes='50vw' />
                                    ) : (
                                        <span className={styles.imgPlaceholder}>Photo</span>
                                    )}
                                </div>
                                <div className={styles.moreBody}>
                                    <span
                                        className={styles.category}
                                        style={{ color: categoryColours[a.category] }}
                                    >
                                        {a.category}
                                    </span>
                                    <h4 className={styles.moreTitle}>{a.title}</h4>
                                    <p className={styles.moreExcerpt}>{a.excerpt}</p>
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