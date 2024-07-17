import React from 'react'; // Importa React
import { Link } from "react-router-dom";
import styles from "./Pie.module.css";
import logo from "./logo.png";

function Footer() {
    return (
        <footer className={styles.pie}> 
            <Link to="/"> 
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura" /><span></span>
                </section>
            </Link>
        </footer>
    );
}

export default Footer;


