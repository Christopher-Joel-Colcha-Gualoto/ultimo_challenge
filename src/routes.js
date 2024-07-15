import React from 'react';  // Asegúrate de tener esta línea
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
