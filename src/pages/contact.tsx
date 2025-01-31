import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact Us - Hafla Storage & Movers</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Contact Us</h1>
                <QuoteForm />
            </main>
            <Footer />
        </div>
    );
}