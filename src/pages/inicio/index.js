import React from 'react';
import Cabecera from '../../componentes/Cabecera/Cabecera';
import Banner from '../../componentes/Banner';
import Card from '../../componentes/Card';
import style from './index.modules.css'; 
import videos from '../data/db.json';

function Inicio() {
    return (
        <>
            <Cabecera />
            <Banner img="home" color="#154580" />

            <div className={style.container}>
            {videos.map((video)=>{
                    return <Card {...video} key={video.id}/>
                })}
            </div>
        </>
    );
}

export default Inicio;
