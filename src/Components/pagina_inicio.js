import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/contactos.css';
import Footer from './footer';
import Header from './header';
import Contactos from './contactos';
import Buscador from './buscador';


export default function Pagina_inicio() {

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