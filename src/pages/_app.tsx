import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google'; // Import Roboto font
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

// Configure the Roboto font
const roboto = Roboto({
    weight: ['400', '500', '700'], // Specify the font weights you need
    subsets: ['latin'], // Specify the subsets you need
    variable: '--font-roboto', // Define a CSS variable for the font
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            {/* Apply the Roboto font to the entire app */}
            <main className={`${roboto.variable} font-sans`}>
                <Component {...pageProps} />
                <ToastContainer />
            </main>
        </>
    );
}