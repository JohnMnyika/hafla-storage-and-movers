import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { useState } from 'react';
import styles from '../styles/Services.module.css';

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState('');

    const openModal = (service: string) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedService('');
        setIsModalOpen(false);
    };

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
                <title>Services - Hafla Storage & Movers | Student Storage & Moving Solutions</title>
                <meta name="description" content="Explore our student-focused storage and moving services, including local and long-distance moving, secure storage, and customizable packages." />
                <meta name="keywords" content="student storage, moving services, local moving, long-distance moving, secure storage" />
                <meta property="og:title" content="Services - Hafla Storage & Movers" />
                <meta property="og:description" content="Explore our student-focused storage and moving services, including local and long-distance moving, secure storage, and customizable packages." />
                <meta property="og:image" content="https://hafla-storage-and-movers.vercel.app/_next/image?url=%2Flogo.jpeg&w=64&q=75" />
                <meta property="og:url" content="https://hafla-storage-and-movers.vercel.app/services" />
                <link rel="canonical" href="https://hafla-storage-and-movers.vercel.app/services" />
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
                            <button onClick={() => openModal(service.title)} className={styles.serviceButton}>
                                Request a Quote
                            </button>
                        </div>
                    ))}
                </div>
            </main>
            <QuoteModal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                selectedService={selectedService}
            />
            <Footer />
        </div>
    );
}