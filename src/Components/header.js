import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './media/logo.png';
import "./css/header.css";

export default function Header() {

    return (
        <div>
            <div className="container-fluid">
                <div className="row header">
                    <a className="navbar-brand logo col-2" href="#">
                        <img src={logo} />
                    </a>

                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">

                            </span>
                        </button> */}

                    <div className="mensaje col-2">
                        <p className="ml-5"> Bienvenido(a): Administrador</p>
                    </div>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light col-6">
                        <ul className="navbar-nav me-auto mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" href="#">Contactos</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" >Compañias</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Usuarios</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-danger">Cerrar Sesion</button>
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