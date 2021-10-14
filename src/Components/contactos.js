import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/contactos.css';
import Buscador from './buscador'
import editar from '../media/editar.png';
import eliminar from '../media/eliminar.png';


const Contactos = ({ contactos }) => {

    if (Buscador.length === []) {
        return (
            <div style={{ textAlign: 'center', marginTop: 100 }}>
                <h2>No hay contactos registrados</h2>
            </div>
        )
    } else {
        return (
            contactos.map(({ Nombre, Apellido, Compañia, Cargo, Email, Celular, Direccion, Ciudad }) => (
                <div className='mt-3' key={Nombre + Compañia}>
                    <section>
                        <div className="table-responsive-lg">
                            <table className="table" border="0">
                                <thead>
                                    <tr>
                                        <th style={{ width: 109 }}>Nombre</th>
                                        <th style={{ width: 109 }}>Apellido</th>
                                        <th style={{ width: 109 }}>Compañia</th>
                                        <th style={{ width: 109 }}>Cargo</th>
                                        <th style={{ width: 109 }}>Email</th>
                                        <th style={{ width: 100 }}>Celular</th>
                                        <th style={{ width: 109 }}>Dirección</th>
                                        <th style={{ width: 109 }}>Ciudad</th>
                                        <th style={{ width: 150 }}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ width: 109 }}>{Nombre}</td>
                                        <td style={{ width: 109 }}>{Apellido}</td>
                                        <td style={{ width: 109 }}>{Compañia}</td>
                                        <td style={{ width: 109 }}>{Cargo}</td>
                                        <td style={{ width: 109 }}>{Email}</td>
                                        <td style={{ width: 100 }}>{Celular}</td>
                                        <td style={{ width: 109 }}>{Direccion}</td>
                                        <td style={{ width: 109 }}>{Ciudad}</td>
                                        <td style={{ width: 150 }}>
                                            
                                            <div className="options">
                                                <button className="btn btn-primary editar" >Editar</button>
                                                <button className="btn btn-danger" >Eliminar</button>

                                                {/* <a href="#" title="Click para editar el registro" className="link_tbl_lista qui-btn-back">
                                                    <img src={editar} alt='editar' />
                                                </a>

                                                <a href="#" title="Click para eliminar el registro" className="link_tbl_lista qui-btn-back">
                                                    <img src={eliminar} alt='eliminar' />
                                                </a> */}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            ))
        );
    }
}

export default Contactos;