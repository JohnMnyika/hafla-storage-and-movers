import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
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
                <title>FAQ - Hafla Storage & Movers | Frequently Asked Questions</title>
                <meta name="description" content="Find answers to frequently asked questions about Hafla Storage & Movers. Learn about our student storage and moving services." />
                <meta name="keywords" content="FAQ Hafla Storage, student storage, moving services, frequently asked questions" />
                <meta property="og:title" content="FAQ - Hafla Storage & Movers" />
                <meta property="og:description" content="Find answers to frequently asked questions about Hafla Storage & Movers. Learn about our student storage and moving services." />
                <meta property="og:image" content="https://hafla-storage-and-movers.vercel.app/_next/image?url=%2Flogo.jpeg&w=64&q=75" />
                <meta property="og:url" content="https://hafla-storage-and-movers.vercel.app/faq" />
                <link rel="canonical" href="https://hafla-storage-and-movers.vercel.app/faq" />
            </Head>
            <Header />
            <motion.main
                className={styles.main}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Frequently Asked Questions
                </motion.h1>
                <motion.div
                    className={styles.faqList}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className={styles.faqItem}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
                        >
                            <motion.h3
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 + 0.1, duration: 0.5, ease: 'easeOut' }}
                            >
                                {faq.question}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.2 + 0.2, duration: 0.5, ease: 'easeOut' }}
                            >
                                {faq.answer}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.main>
            <Footer />
        </div>
    );
}
