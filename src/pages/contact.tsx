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
                <meta property="og:image" content="http://hafla-storage-and-movers.co.ke/_next/image?url=%2Flogo.jpeg&w=64&q=75" />
                <meta property="og:url" content="http://hafla-storage-and-movers.co.ke/" />
                <link rel="canonical" href="http://hafla-storage-and-movers.co.ke/contact" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.heroSection}>
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.subtitle}>Get in touch with Hafla Storage & Movers for affordable and secure storage solutions. Request a free quote today!</p>
                </div>
                <div className={styles.formContainer}>
                    <QuoteForm />
                </div>
                {/* Testimonials Section */}
                <div className={styles.testimonials}>
                    <h2 className={styles.testimonialsTitle}>What Our Customers Say</h2>
                    <div className={styles.testimonialsGrid}>
                        <div className={styles.testimonialCard}>
                            <p className={styles.testimonialText}>&quot;Hafla Storage made my move stress-free! Their team was professional and efficient.&quot;</p>
                            <p className={styles.testimonialAuthor}>- Jane Muthoni</p>
                        </div>
                        <div className={styles.testimonialCard}>
                            <p className={styles.testimonialText}>&quot;Affordable and reliable storage solutions. Highly recommend Hafla Storage!&quot;</p>
                            <p className={styles.testimonialAuthor}>- John Kimani</p>
                        </div>
                        <div className={styles.testimonialCard}>
                            <p className={styles.testimonialText}>&quot;Great service and friendly staff. My belongings were safe and secure.&quot;</p>
                            <p className={styles.testimonialAuthor}>- Mary Johnson</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}