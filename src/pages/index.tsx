import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
    const [backgroundColor, setBackgroundColor] = useState('blue');

    useEffect(() => {
        const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % colors.length;
            setBackgroundColor(colors[currentIndex]);
        }, 1000); // Change color every 1000ms (1 second)

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            backgroundColor,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.5s ease',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
        }}>
            <Head>
                <title>Website on hold until further notice, please come back later!</title>
                <meta name="description" content="This page changes colors every second." />
            </Head>
            Trust us at your own risk!
        </div>
    );
}