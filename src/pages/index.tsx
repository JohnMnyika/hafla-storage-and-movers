import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import Image from "next/image";

export default function MaintenancePage() {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "#FF5733", // Red-Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#F033FF", // Purple
    "#FF33F0", // Pink
    "#33FFF5", // Cyan
    "#FFD733", // Yellow
  ];

  // Memoized color change function
  const changeColor = useCallback(() => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  }, [colors.length]);

  // Change color every second
  useEffect(() => {
    const interval = setInterval(changeColor, 1000);
    return () => clearInterval(interval);
  }, [changeColor]);

  // Add spinner animation to DOM only on the client
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const styles: { [key: string]: React.CSSProperties } = {
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      padding: "1rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: colors[colorIndex],
      transition: "background-color 0.5s ease",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "20px",
      padding: "2.5rem",
      boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
      textAlign: "center",
      maxWidth: "480px",
      width: "100%",
      color: "#333",
    },
    logo: {
      width: "80px",
      height: "80px",
      marginBottom: "1.5rem",
      objectFit: "contain",
    },
    spinner: {
      margin: "1rem auto",
      width: "48px",
      height: "48px",
      border: "6px solid #ccc",
      borderTop: `6px solid ${colors[colorIndex]}`,
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    title: {
      fontSize: "1.8rem",
      fontWeight: 600,
      marginBottom: "0.75rem",
    },
    message: {
      fontSize: "1.05rem",
      marginBottom: "1.5rem",
      color: "#555",
    },
    footer: {
      fontSize: "0.85rem",
      color: "#aaa",
      marginTop: "2rem",
    },
  };

  return (
    <>
      <Head>
        <title>Please pay the developers</title>
      </Head>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <Image 
            src="/logo.PNG" 
            alt="Company Logo" 
            width={80}
            height={80}
            style={styles.logo}
          />
          <div style={styles.spinner} aria-label="Loading" />
          <h1 style={styles.title}>We do not keep our word!</h1>
          <p style={styles.message}>
            <br />
            Trust us at your own risk!
          </p>
          <footer style={styles.footer}>
            &copy; {new Date().getFullYear()} Hafla Storage &amp; Movers. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}