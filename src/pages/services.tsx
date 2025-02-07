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