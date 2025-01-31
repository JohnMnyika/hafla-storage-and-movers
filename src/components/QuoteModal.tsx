import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
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

        // Prepare the email data
        const emailData = {
            ...formData,
            service: selectedService, // Include the selected service in the email
        };

        try {
            // Send the email using EmailJS
            await emailjs.send(
                'service_dtwmapbo', // Replace with your EmailJS service ID
                'template_xxxxxxxxxxxxxxxx', // Replace with your EmailJS template ID
                emailData,
                'obWsOrvkulvNl08WO' // Replace with your Public Key (User ID)
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

            onRequestClose(); // Close the modal
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