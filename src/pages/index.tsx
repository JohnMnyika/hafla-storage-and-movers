import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
    const [backgroundColor, setBackgroundColor] = useState('blue');

    useEffect(() => {
        const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
        let currentIndex = 0;

        const interval = setInterval(() => {
            // Cycle through the colors array
            currentIndex = (currentIndex + 1) % colors.length;
            setBackgroundColor(colors[currentIndex]);
        }, 1000); // Change color every 1000ms (1 second)

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ backgroundColor, width: '100vw', height: '100vh', transition: 'background-color 0.5s ease' }}>
            <Head>
                <title>Website on hold.</title>
                <meta name="description" content="On hold." />
            </Head>
            {/* This is a color-changing page */}
        </div>
    );
}