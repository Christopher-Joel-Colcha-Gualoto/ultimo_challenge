// index.js
import React from 'react';
import Banner from '../../componentes/Banner';
import Card from '../../componentes/Card';
import styles from "./index.module.css";
import videos from '../data/db.json';

function Inicio() {
    
    const categorias = [...new Set(videos.map(video => video.categoria))];

    const categoryClass = {
        "Front End": styles.frontend,
        "Back End": styles.backend,
        "Innovación y Gestión": styles.innovacion,
    };

    return (
        <>
            <Banner img="home" color="#154580" />

            <section className={styles.container}>
                {categorias.map(categoria => (
                    <div key={categoria} className={categoryClass[categoria]}>
                        <h2 className={styles.categoria}>{categoria}</h2>
                        <div className={styles.videos}>
                            {videos.filter(video => video.categoria === categoria).map(video => (
                                <Card {...video} categoria={categoria} key={video.id} />
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Inicio;
