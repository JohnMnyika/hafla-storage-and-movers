import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Hafla Storage & Movers</title>
                <meta name="description" content="Student-focused storage and moving services" />
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Welcome to Hafla Storage & Movers</h1>
                <p>Your trusted partner for student storage and moving solutions.</p>
                <img src="/boxes.jpeg" alt="Storage Boxes" className={styles.heroImage} />
            </main>
            <Footer />
        </div>
    );
}