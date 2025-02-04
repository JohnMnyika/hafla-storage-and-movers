import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import styles from '../styles/About.module.css';

export default function About() {
    return (
        <div>
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
                        <Image src="/items.jpeg" alt="About Hafla Storage & Movers" width={500} height={300} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}