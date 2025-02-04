import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteForm from '../components/QuoteForm';
import styles from '../styles/Contact.module.css';

export default function Contact() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Contact Us - Hafla Storage & Movers | Get a Free Quote</title>
                <meta name="description" content="Contact Hafla Storage & Movers for affordable and secure student storage and moving services. Request a free quote today!" />
                <meta name="keywords" content="contact Hafla Storage, student storage, moving services, free quote" />
                <meta property="og:title" content="Contact Us - Hafla Storage & Movers" />
                <meta property="og:description" content="Contact Hafla Storage & Movers for affordable and secure student storage and moving services. Request a free quote today!" />
                <meta property="og:image" content="https://hafla-storage-and-movers.vercel.app/_next/image?url=%2Flogo.jpeg&w=64&q=75" />
                <meta property="og:url" content="https://hafla-storage-and-movers.vercel.app/" />
                <link rel="canonical" href="https://hafla-storage-and-movers.vercel.app/contact" />
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