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
        <div className="container mt-3" style={{marginLeft:175}}>
            <div className="container-fluid">
                <div className="row header">
                    <div className="navbar-brand logo col-2">
                        <img src={logo} alt="Logo"/>
                    </div>

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">

                            </span>
                        </button> */}

                    {/* <div className="mensaje col-2">
                        <p> Bienvenido(a): Administrador</p>
                    </div> */}

                    <nav className="navbar navbar-expand-lg navbar-light bg-light col-6">
                        <ul className="navbar-nav mr-auto mb-lg-0">

                            <li className="nav-item">
                                <h1>Agenda</h1>
                            </li>

                            <li className="nav-item">
                                <h1>Empresarial</h1>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link">Usuarios</a>
                            </li> */}

                            <li className="nav-item">
                                <button type="button" className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesion</button>
                            </li>

                        </ul>

                    </nav>
                    {/* <form className="d-flex  col-2">
                            <button type="button" className="btn btn-danger">Cerrar Sesion</button>
                        </form> */}
                </div>
            </div>
            {/* <div className="container bus-btn">
                <div className="row">
                    <div className="buscador-e">
                        <Buscador />
                        <div className="ingresar">
                            <button type="button" className="btn btn-primary">Ingresar</button>
                        </div>
                    </div>
                </div>

            </div> */}
        </div>
    );
}