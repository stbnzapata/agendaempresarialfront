import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../media/logo.png';
import "../css/header.css";
import { app } from '../fb';

export default function Header() {

    const cerrarSesion = () => {
        app.auth().signOut();
    }

    return (
        <div className="container-fluid vertical-encuentra mt-3">
            <section className="cont_header">
                <header>
                    <nav className="cont_header_interior ">
                        <article className="logo_encabezado mt-3">
                            <div href="/#">
                                <img src={logo} alt="Logo" />
                            </div>
                        </article>
                        <article className="nom mt-4">
                            <h1 className="name">Agenda Empresarial</h1>
                        </article>
                        <article className="btn_cerrar mt-4 nav-item">
                            <button type="button" className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesion</button>
                        </article>
                    </nav>
                </header>
            </section>
        </div>
    );
}