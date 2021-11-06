import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer';
import Header from './header';
import Buscador from './buscador';

export default function PaginaInicio() {
    return (
        <div>
           <Header/>
           <Buscador/>    
           <Footer/>
        </div>
    );
}