import { useEffect, useState } from "react";
import Head from "next/head";

export default function MaintenancePage() {
  const [darkMode, setDarkMode] = useState(false);

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

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const styles: { [key: string]: React.CSSProperties } = {
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      padding: "1rem",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: darkMode ? "#121212" : "#f0f2f5",
      transition: "background-color 0.3s ease",
    },
    card: {
      backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
      borderRadius: "20px",
      padding: "2.5rem",
      boxShadow: darkMode
        ? "0 8px 24px rgba(255,255,255,0.05)"
        : "0 8px 24px rgba(0,0,0,0.1)",
      textAlign: "center",
      maxWidth: "480px",
      width: "100%",
      color: darkMode ? "#e0e0e0" : "#333",
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
      borderTop: `6px solid ${darkMode ? "#90caf9" : "#007bff"}`,
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
      color: darkMode ? "#aaa" : "#555",
    },
    footer: {
      fontSize: "0.85rem",
      color: darkMode ? "#777" : "#aaa",
      marginTop: "2rem",
    },
    toggleBtn: {
      marginTop: "1.5rem",
      padding: "0.5rem 1rem",
      borderRadius: "8px",
      border: "none",
      backgroundColor: darkMode ? "#333" : "#007bff",
      color: "#fff",
      cursor: "pointer",
      fontWeight: 500,
    },
  };

  return (
    <>
      <Head>
        <title>Please pay the developers</title>
      </Head>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <img src="/logo.PNG" alt="Company Logo" style={styles.logo} />
          <div style={styles.spinner} aria-label="Loading" />
          <h1 style={styles.title}>We’ll Be Right Back!</h1>
          <p style={styles.message}>
            Our website is currently undergoing maintenance.
            <br />
            Thanks for your patience.
          </p>
          <button style={styles.toggleBtn} onClick={toggleTheme}>
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
          <footer style={styles.footer}>
            &copy; {new Date().getFullYear()} Hafla Storage & Movers. All rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}