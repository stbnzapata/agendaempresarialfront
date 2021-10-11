import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/contactos.css';
import Buscador from './buscador'


const Contactos = ({contactos}) => {

    if(Buscador.length === []){
        return (
        <div style={{textAlign:'center', marginTop: 100 }}>
            <h2>No hay contactos registrados</h2>
        </div>
        )
     }else{
        return (
            contactos.map(({ Nombre, Apellido, Compañia, Cargo, Email, Celular, Direccion, Ciudad }) => (
                <div className='mt-3' key={Nombre+Compañia}>
                    <section>
                        <div className="table-responsive-lg">
                            <table className="table" border="0">
                                <thead>
                                    <tr>
                                        <th style={{width:109}}>Nombre</th>
                                        <th style={{width:109}}>Apellido</th>
                                        <th style={{width:109}}>Compañia</th>
                                        <th style={{width:109}}>Cargo</th>
                                        <th style={{width:109}}>Email</th>
                                        <th style={{width:100}}>Celular</th>
                                        <th style={{width:109}}>Dirección</th>
                                        <th style={{width:109}}>Ciudad</th>
                                        <th style={{width:150}}>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{width:109}}>{Nombre}</td>
                                        <td style={{width:109}}>{Apellido}</td>
                                        <td style={{width:109}}>{Compañia}</td>
                                        <td style={{width:109}}>{Cargo}</td>
                                        <td style={{width:109}}>{Email}</td>
                                        <td style={{width:100}}>{Celular}</td>
                                        <td style={{width:109}}>{Direccion}</td>
                                        <td style={{width:109}}>{Ciudad}</td>
                                        <td style={{width:150}}><button className="btn btn-primary" style={{ width: 80 }}>Editar</button> <button className="btn btn-danger" style={{ width: 80 }}>Eliminar</button></td>
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