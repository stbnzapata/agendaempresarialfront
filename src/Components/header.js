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
            <div className="container-fluid">
                <div className="row header">

                    <div className="navbar-brand logo col-2" style={{marginLeft:20}}>
                        <img src={logo} alt="Logo"/>
                        <div className="mensaje">
                            <p>Agenda Empresarial</p>
                        </div>
                    </div>

<<<<<<< HEAD
        
                    <form className="d-flex col-2">
                    <button type="button" className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesion</button>
                    </form>
                </div>
            </div>
    
=======
                    <nav className="navbar navbar-expand-lg navbar-light bg-light col-6">
                        <ul className="navbar-nav mr-auto mb-lg-0">

                            <li className="nav-item">
                                <h1>Agenda</h1>
                            </li>

                            <li className="nav-item">
                                <h1>Empresarial</h1>
                            </li>

                            <li className="nav-item">
                                <button type="button" className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesion</button>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>
>>>>>>> 37a3f3698ec83e9cca4e0709ecda38725f6b7b09
        </div>
    );
}