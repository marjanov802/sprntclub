'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Our Story' },
    { href: '/tickets', label: 'Buy Tickets' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/news', label: 'News' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <Link href="/" className={styles.logo}>
                SPRNT<span className={styles.logoAccent}>CLUB</span>
            </Link>

            <ul className={styles.links}>
                {links.map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className={`${styles.link} ${pathname === href ? styles.active : ''}`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}