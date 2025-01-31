import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';
import styles from '../styles/QuoteModal.module.css';

Modal.setAppElement('#__next'); // Required for accessibility

interface QuoteModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    selectedService: string;
}

export default function QuoteModal({ isOpen, onRequestClose, selectedService }: QuoteModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const emailData = {
            ...formData,
            service: selectedService, // Include the selected service in the email
        };

        try {
            await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
                emailData,
                'YOUR_USER_ID' // Replace with your EmailJS user ID
            );
            alert('Quote request sent successfully!');
            onRequestClose();
        } catch (error) {
            console.error('Failed to send quote request:', error);
            alert('Failed to send quote request. Please try again.');
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
        >
            <h2>Request a Quote for {selectedService}</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                />
                <input
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </Modal>
    );
}