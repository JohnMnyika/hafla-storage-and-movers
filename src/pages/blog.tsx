import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Blog.module.css';

export default function Blog() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog - Hafla Storage & Movers</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Coming Soon</h1>
                <p>Our blog is under construction. Check back later!</p>
            </main>
            <Footer />
        </div>
    );
}