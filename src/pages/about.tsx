import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Us - Hafla Storage & Movers</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>About Hafla Storage & Movers</h1>
                <p>At Hafla Storage & Movers, we specialize in tailored storage and moving services for students...</p>
                <img src="/items.jpeg" alt="Moving Items" className={styles.aboutImage} />
            </main>
            <Footer />
        </div>
    );
}