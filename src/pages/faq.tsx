import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/FAQ.module.css';

export default function FAQ() {
    return (
        <div className={styles.container}>
            <Head>
                <title>FAQ - Hafla Storage & Movers</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Frequently Asked Questions</h1>
                <p>Find answers to common questions about our services...</p>
            </main>
            <Footer />
        </div>
    );
}