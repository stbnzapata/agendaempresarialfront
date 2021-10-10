import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/contactos.css';
import Buscador from './buscador'

export default function Contactos() {

    if(Buscador.length === []){
        return (
        <div style={{textAlign:'center', marginTop: 100 }}>
            <h2>No hay contactos registrados</h2>
        </div>
        )
    }else{
        return (

            <div>
                <section>
                    <div className="table-responsive">
                        <table className="table" border="0">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Compañia</th>
                                    <th>Cargo</th>
                                    <th>Email</th>
                                    <th>Celular</th>
                                    <th>Dirección</th>
                                    <th>Ciudad</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Rocky</td>
                                    <td>Balboa</td>
                                    <td>EPM</td>
                                    <td>Jefe Operaciones</td>
                                    <td>Rocky@balboa.es</td>
                                    <td>3192222222</td>
                                    <td>Calle 45 # 50 - 50</td>
                                    <td>Bogota</td>
                                    <td><button className="btn btn-primary" style={{width: 80}}>Editar</button> <button className="btn btn-danger" style={{width: 80}}>Eliminar</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        );
    }    
}