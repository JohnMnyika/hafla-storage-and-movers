import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src="/logo.jpeg" alt="Hafla Storage & Movers Logo" width={150} height={50} />
            </div>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/faq">FAQ</Link>
            </nav>
        </header>
    );
}