import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Hafla Storage & Movers. All rights reserved.</p>
        </footer>
    );
}