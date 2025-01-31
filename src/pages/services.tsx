import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import styles from '../styles/Services.module.css';

export default function Services() {
    const services = [
        {
            title: 'Student Storage',
            description: 'Affordable and secure storage solutions for students.',
            icon: '📦',
        },
        {
            title: 'Local Moving',
            description: 'Reliable and efficient local moving services.',
            icon: '🚚',
        },
        {
            title: 'Long-Distance Moving',
            description: 'Stress-free long-distance moving for students.',
            icon: '✈️',
        },
    ];

    return (
        <div>
            <Head>
                <title>Services - Hafla Storage & Movers</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Our Services</h1>
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <Link href="/contact" className={styles.serviceButton}>Learn More</Link>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}