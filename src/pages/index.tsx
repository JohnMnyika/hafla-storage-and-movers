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

            {/* Why Choose Us Section */}
            <section className={styles.whyChooseUs}>
                <h2>Why Choose Us?</h2>
                <div className={styles.reasonsGrid}>
                    <div className={styles.reasonCard}>
                        <h3>Student-Focused Services</h3>
                        <p>Designed to accommodate student schedules and budgets.</p>
                    </div>
                    <div className={styles.reasonCard}>
                        <h3>Award-Winning Company</h3>
                        <p>Recognized for outstanding moving and storage services.</p>
                    </div>
                    <div className={styles.reasonCard}>
                        <h3>Trusted & Secure</h3>
                        <p>We prioritize safety and security, ensuring your belongings are handled with care.</p>
                    </div>
                    <div className={styles.reasonCard}>
                        <h3>Experienced Team</h3>
                        <p>Skilled movers with a track record of excellence.</p>
                    </div>
                    <div className={styles.reasonCard}>
                        <h3>Affordable & Flexible</h3>
                        <p>Transparent pricing and customizable services to fit your needs.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}