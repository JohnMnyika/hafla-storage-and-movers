import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About Us - Hafla Storage & Movers | Student Storage & Moving Services</title>
                <meta name="description" content="Learn more about Hafla Storage & Movers, a trusted provider of student-focused storage and moving services. Affordable, secure, and reliable solutions." />
                <meta name="keywords" content="about Hafla Storage, student storage, moving services, affordable storage" />
                <meta property="og:title" content="About Us - Hafla Storage & Movers" />
                <meta property="og:description" content="Learn more about Hafla Storage & Movers, a trusted provider of student-focused storage and moving services." />
                <meta property="og:image" content="http://hafla-storage-and-movers.co.ke/_next/image?url=%2Flogo.jpeg&w=64&q=75" />
                <meta property="og:url" content="http://hafla-storage-and-movers.co.ke/" />
                <link rel="canonical" href="http://hafla-storage-and-movers.co.ke/" />
            </Head>

            <Header />

            <motion.main
                className={styles.main}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className={styles.aboutContent}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div className={styles.aboutText}>
                        <motion.h1
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            About Hafla Storage & Movers
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            At Hafla Storage & Movers, we specialize in tailored storage and moving services for students. We understand the unique challenges students face when moving between dorms, apartments, or taking extended breaks, and we provide affordable, flexible solutions to meet their needs.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            We are a renowned moving and storage company recognized for excellence in the industry. Our commitment to quality service has earned us prestigious awards such as the KESA Awards. We take great pride in providing safe, reliable, and professional moving and storage services that give our customers peace of mind.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className={styles.aboutImage}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <Image
                            src="/items.jpeg"
                            alt="About Hafla Storage & Movers"
                            width={500}
                            height={300}
                            className={styles.image}
                            priority={false} // Lazy load the image
                            placeholder="blur" // Add blur placeholder for better UX
                            blurDataURL="/items.jpeg" // Add a low-res version of the image
                        />
                    </motion.div>
                </motion.div>
            </motion.main>

            <Footer />
        </div>
    );
}