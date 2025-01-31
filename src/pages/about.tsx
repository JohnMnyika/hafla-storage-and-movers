import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div>
            <Head>
                <title>About Us - Hafla Storage & Movers</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <h1>About Hafla Storage & Movers</h1>
                        <p>
                            At Hafla Storage & Movers, we specialize in tailored storage and moving services for students. We understand the unique challenges students face when moving between dorms, apartments, or taking extended breaks, and we provide affordable, flexible solutions to meet their needs.
                        </p>
                        <p>
                            We are a renowned moving and storage company recognized for excellence in the industry. Our commitment to quality service has earned us prestigious awards such as the KESA Awards. We take great pride in providing safe, reliable, and professional moving and storage services that give our customers peace of mind.
                        </p>
                    </div>
                    <div className={styles.aboutImage}>
                        <img src="/items.jpeg" alt="About Us" />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}