import styles from './footer.module.scss';
import React from "react";

export const Footer = () => {
    return (
        <footer>
            <ul className={styles.socialLinks}>
                <li><a href="#" className={`${styles.link} ${styles.fb}`}></a></li>
                <li><a href="#" className={`${styles.link} ${styles.pin}`}></a></li>
                <li><a href="#" className={`${styles.link} ${styles.in}`}></a></li>
            </ul>
        </footer>
    );
}