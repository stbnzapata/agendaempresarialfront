import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css';

export default function Buscador() {

    return (
        <div>
            <div className="container bus-btn">
                <div className="row">
                    <div className="buscador-e">
                        <div className="buscador col-2">
                            <div className="input-group">
                                <div className="form-outline">
                                    <input type="search" id="form1" className="form-control" value="Buscar" />
                                    {/* <label className="form-label" for="form1">Buscar</label> */}
                                </div>
                                <button type="button" className="btn btn-primary">
                                    <i className="fas fa-search">Buscar</i>
                                </button>
                            </div>
                        </div>
                        <div className="ingresar">
                            {/* <button type="button" className="btn btn-primary">Ingresar</button> */}
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                               Ingresar
                            </button>
                        </div>

            
                    </div>
                </div>
            </div>


        </div>

    );
}