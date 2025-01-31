import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/QuoteForm.module.css';

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                e.currentTarget,
                'YOUR_USER_ID' // Replace with your EmailJS user ID
            );
            alert('Quote request sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            console.error('Failed to send quote request:', error);
            alert('Failed to send quote request. Please try again.');
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
            />
            <button type="submit">Request Quote</button>
        </form>
    );
}