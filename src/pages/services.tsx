import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Services.module.css';

export default function Services() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Services - Hafla Storage & Movers</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Our Services</h1>
                <p>We offer a range of services tailored to student needs...</p>
            </main>
            <Footer />
        </div>
    );
}