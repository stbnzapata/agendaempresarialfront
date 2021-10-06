import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contactos.css';
import Footer from './footer';
import Header from './header';
import Contactos from './contactos';
import Buscador from './buscador';


export default function PaginaInicio() {

    return (
        <div>
           <Header/>
           <Buscador/>
            <section>
                <Contactos/>
            </section>       
           <Footer/>
        </div>
    );
}