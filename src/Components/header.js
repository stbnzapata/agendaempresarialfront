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

        
                    <form className="d-flex col-2">
                    <button type="button" className="btn btn-danger" onClick={cerrarSesion}>Cerrar Sesion</button>
                    </form>
                </div>
            </div>
    
        </div>
    );
}