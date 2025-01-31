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
                <div className={styles.about}>
                    <h1>About Hafla Storage & Movers</h1>
                    <p>
                        At Hafla Storage & Movers, we specialize in tailored storage and moving services for students. We understand the unique challenges students face when moving between dorms, apartments, or taking extended breaks, and we provide affordable, flexible solutions to meet their needs.
                    </p>
                    <img src="/items.jpeg" alt="Moving Items" className={styles.aboutImage} />
                </div>
            </main>
            <Footer />
        </div>
    );
}