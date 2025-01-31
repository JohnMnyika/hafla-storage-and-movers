import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerSection}>
                    <h3>Contact Us</h3>
                    <p>Phone: +254 110947219</p>
                    <p>Email: haflacustomersales@gmail.com</p>
                    <p>Address: 38363-00100</p>
                </div>
                <div className={styles.footerSection}>
                    <h3>Follow Us</h3>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                </div>
            </div>
            <p className={styles.footerBottom}>&copy; {new Date().getFullYear()} Hafla Storage & Movers. All rights reserved.</p>
        </footer>
    );
}