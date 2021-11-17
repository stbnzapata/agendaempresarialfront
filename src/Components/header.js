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
        <div>

           

            <section class="cont_header">
                <header>
                    <section class="cont_header_interior">
                        <article class="logo_encabezado">
                            <a href="">
                                <img src={logo} alt="Logo" />
                            </a>
                        </article>
                        <article class="nom">
                            <h1 className="name">Agenda Empresarial</h1>
                        </article>
                        <article class="btn_cerrar">
                            <button type="button" className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesion</button>
                        </article>
                    </section>
                </header>
            </section>



            {/* <div className="container-fluid vertical-encuentra">
                <div className="row header">

                    <div className="navbar-brand logo col-2" >
                        <img src={logo} alt="Logo"/>
                    </div>


                    <nav className="navbar navbar-expand-lg navbar-light bg-light col-6">
                        <ul className="navbar-nav mr-auto mb-lg-0">

                            <li className="nav-item col-6">
                                <h1 className="name">Agenda Empresarial</h1>
                            </li>

                            <li className="nav-item col-6 ">
                                <button type="button" className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesion</button>
                            </li>

                        </ul>
                    </nav>

                </div>
            </div> */}
        </div>
    );
}