import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import styles from '../styles/QuoteForm.module.css';

export default function QuoteForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await emailjs.send(
                'service_cqgccsz', // Replace with your EmailJS service ID
                'template_4dwvd5x', // Replace with your EmailJS template ID
                formData,
                'sKOUFwgAGtSGTTw-A' // Replace with your EmailJS user ID
            );

            // Show success toast
            toast.success('Quote request sent successfully!', {
                position: 'top-center',
                autoClose: 3000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            // Reset form
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Failed to send quote request:', error);

            // Show error toast
            toast.error('Failed to send quote request. Please try again.', {
                position: 'top-center',
                autoClose: 3000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
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
            <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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