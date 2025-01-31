import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* Quick Links Section */}
                <div className={styles.footerSection}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </div>

                {/* Contact Information Section */}
                <div className={styles.footerSection}>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Phone: +254 110947219</li>
                        <li>Email: haflacustomersales@gmail.com</li>
                        <li>Address: 38363-00100, Nairobi, Kenya</li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className={styles.footerSection}>
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} Hafla Storage & Movers. All rights reserved.</p>
            </div>
        </footer>
    );
}