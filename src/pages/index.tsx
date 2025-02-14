import React from 'react';
import styles from '../styles/Home.module.css';

const UnderConstruction: React.FC = () => {
    return (
        <div className={styles.underConstruction}>
            <div className={styles.content}>
                {/* Hazard Triangle with Exclamation Mark */}
                <div className={styles.hazardTriangle}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={styles.triangleIcon}
                    >
                        <path d="M12 2L1 21h22L12 2z" fill="yellow" stroke="black" strokeWidth="2" />
                        <circle cx="12" cy="10" r="1.5" fill="black" />
                        <rect x="11" y="12" width="2" height="6" fill="black" rx="1" />
                    </svg>
                </div>

                <h1 className={styles.title}>Under Construction</h1>
                <p className={styles.description}>
                    We&apos;re working on something awesome. Stay tuned!
                </p>
            </div>
        </div>
    );
};

export default UnderConstruction;