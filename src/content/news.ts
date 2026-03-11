export interface Article {
    slug: string;
    title: string;
    date: string;
    category: 'Announcements' | 'Events' | 'Community' | 'Updates';
    image?: string;
    excerpt: string;
    body: string;
}

export const articles: Article[] = [
    {
        slug: 'battersea-temporary-move-july',
        title: 'Temporary Move from Battersea Millennium Park',
        date: '2025-07-01',
        category: 'Announcements',
        excerpt:
            "Due to ongoing works at Battersea Millennium Park, our Tuesday sessions will be relocating for a few months. Here's everything you need to know.",
        body: `
We wanted to keep everyone in the loop as early as possible — starting July, our weekly Tuesday sessions will be temporarily moving away from Battersea Millennium Park while works are carried out at the site.

We know how much the park means to the club and to so many of you. It's where SPRNTCLUB started, and it'll always be home. But the works are out of our hands, and rather than cancel sessions, we've found a great alternative venue to keep things running.

**Where are we moving to?**

We'll be announcing the temporary location very shortly — keep an eye on this page and our socials. The new venue is nearby and has everything we need to keep sessions running at the same quality.

**When does the move happen?**

The first session at the new location will be the Tuesday after the July 4th session. We'll confirm exact dates once the works schedule is finalised.

**Will anything else change?**

No. Sessions are still every Tuesday at 8pm. Tickets still drop every Wednesday at 6pm. The price is still £6. Everything you love about SPRNTCLUB stays exactly the same — just a different backdrop for a few months.

**When are we back at Battersea?**

We're expecting to return to Battersea Millennium Park in the autumn. We'll give everyone plenty of notice before we move back.

Thank you for your patience and continued support. If you have any questions, drop us a message on Instagram.

See you on the track.
    `,
    },
    {
        slug: 'welcome-to-sprntclub',
        title: 'Welcome to SPRNTCLUB',
        date: '2025-06-01',
        category: 'Community',
        excerpt:
            "We started this club with one simple idea: that sprinting should be for everyone. Here's a little bit about who we are and what we're building.",
        body: `
Welcome to SPRNTCLUB.

We started this with one simple idea — sprinting should be for everyone. Not just elite athletes, not just people who've been running their whole lives. Anyone who wants to move fast, push themselves, and be part of a community that genuinely shows up every week.

**How it started**

It started as the two of us showing up to a track on a Tuesday evening. Then a few friends joined. Then friends of friends. Before long we had a proper session going, and it became clear this was something people actually wanted.

We didn't overthink it. We just kept turning up, kept the sessions tight and high quality, and let word of mouth do the rest.

**What a session looks like**

We meet every Tuesday at 8pm. Sessions run for about an hour. We warm up together, work through structured sprint sets, and cool down properly. No matter your level, the coaching is tailored so you're always working at the right intensity for you.

**What's next**

We're growing, and we want to do it right. More sessions, more locations, more events. Watch this space.

In the meantime — see you Tuesday.
    `,
    },
];

// ─── Helper ───────────────────────────────────────────────────────────────────
// Returns articles sorted newest first
export function getSortedArticles(): Article[] {
    return [...articles].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find((a) => a.slug === slug);
}