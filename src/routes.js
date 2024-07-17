import React from 'react';  // Asegúrate de tener esta línea
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cabecera from './componentes/Cabecera/Cabecera.js';
import Pie from './componentes/Pie/Pie.js';
import Inicio from './pages/inicio';
import NuevoVideo from './pages/NuevoVideo'
function AppRoutes(){
    return(
        <BrowserRouter>
        <Cabecera/>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path='/NuevoVideo' element={<NuevoVideo/>}/>
            </Routes>
            <Pie/>
        </BrowserRouter>
    );
}

export default AppRoutes;
