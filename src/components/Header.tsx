import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link href="/">
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/logo.jpeg"
                            alt="Hafla Storage & Movers Logo"
                            width={50} // Adjust width as needed
                            height={50} // Adjust height as needed
                            className={styles.logo}
                        />
                        <span className={styles.companyName}>Hafla Storage & Movers</span>
                    </div>
                </Link>
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/services">Services</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/faq">FAQ</Link>
            </nav>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </header>
    );
}