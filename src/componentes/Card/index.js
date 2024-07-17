// Card.js
import React from 'react';
import styles from './Card.module.css';
import { FaEdit, FaTrashAlt } from "react-icons/fa"; 

const Card = ({ capa, titulo, descripcion, video, categoria }) => {
    const categoryClass = {
        "Front End": styles.frontend,
        "Back End": styles.backend,
        "Innovación y Gestión": styles.innovacion,
    };

    return (
        <div className={`${styles.container} ${categoryClass[categoria]}`}>
            <img src={capa} alt={titulo} className={styles.card} />
            <div className={styles.container_card}>
                <div className={styles.actionItem}>
                    <FaTrashAlt />
                    <span>Eliminar</span>
                </div>
                <div className={styles.actionItem}>
                    <FaEdit />
                    <span>Editar</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
