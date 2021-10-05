import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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

                  <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Ingrese un nuevo registro</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-group">
                                                <label for="formGroupExampleInput">Nombre</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput"
                                                    placeholder="Ingrese el nombre" />
                                            </div>
                                            <div className="form-group">
                                                <label for="formGroupExampleInput2">Apellido</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el Apellido" />
                                            </div>
                                            <div className="form-group">
                                                <label for="formGroupExampleInput2">2º Apellido</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el 2º Apellido" />
                                            </div>
                                            <div className="form-group">
                                                <label for="formGroupExampleInput2">Móvil</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el Móvil" />
                                            </div>
                                            <div className="form-group">
                                                <label for="formGroupExampleInput2">Email</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el Email" />
                                            </div>
                                            <div className="form-group">
                                                <label for="formGroupExampleInput2">Dirección</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el Dirección" />
                                            </div>
                                            <select className="form-control">
                                                <option>Seleccione ciudad</option>
                                                <option>Medellin</option>
                                                <option>Cali</option>
                                                <option>Bogota</option>
                                                <option>Pereira</option>
                                            </select>
                                            <div className="form-group">
                                                <label for="formGroupExampleInput2">Compañia</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput2"
                                                    placeholder="Ingrese el NIT de la compañia" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

        </div>

    );
}