import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Hafla Storage & Movers</title>
                <meta name="description" content="Student-focused storage and moving services" />
            </Head>
            <Header />
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Your Trusted Partner for Student Storage & Moving</h1>
                    <p>Affordable, secure, and hassle-free solutions tailored for students.</p>
                    <Link href="/services" className={styles.ctaButton}>View Our Services</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}