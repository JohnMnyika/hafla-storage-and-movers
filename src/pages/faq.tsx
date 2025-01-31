import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/FAQ.module.css';

export default function FAQ() {
    const faqs = [
        {
            question: 'What services do you offer?',
            answer: 'We offer student-focused storage and moving services, including local and long-distance moving, secure storage solutions, and customizable packages.',
        },
        {
            question: 'How do I request a quote?',
            answer: 'You can request a quote by clicking the "Request a Quote" button on our Services page or contacting us directly via phone or email.',
        },
        {
            question: 'Are your services affordable for students?',
            answer: 'Yes, we offer competitive pricing and flexible packages tailored to fit student budgets.',
        },
        {
            question: 'Is my belongings safe during storage?',
            answer: 'Absolutely! We prioritize safety and security, ensuring your belongings are handled with care and stored in secure facilities.',
        },
        {
            question: 'Do you provide packing materials?',
            answer: 'Yes, we offer packing materials and assistance to ensure your items are safely packed and transported.',
        },
        {
            question: 'Can I customize my moving package?',
            answer: 'Yes, we provide customizable services to meet your specific needs. Contact us to discuss your requirements.',
        },
    ];

    return (
        <div>
            <Head>
                <title>FAQ - Hafla Storage & Movers</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Frequently Asked Questions</h1>
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}