import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/contactos.css';
import Buscador from './buscador';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';

const Contactos = ({ contactos }) => {

    const [showEditar, setShowEditar] = useState(false);
    const [formValues, setFormValues] = useState({
        Nombre: '',
        Apellido: '',
        Compañia: 0,
        Cargo: '',
        Email: '',
        Celular: '',
        Direccion: '',
        Ciudad: ''
    });

    const seleccionarContacto = (elemento) => {
        setFormValues(elemento);
        setShowEditar(true);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    }

    const handleClose = () => {
        setShowEditar(false);
    }

    if (Buscador.length === []) {
        return (
            <div style={{ textAlign: 'center', marginTop: 100 }}>
                <h2>No hay contactos registrados</h2>
            </div>
        )
    } else {
        return (

            <div className="container mt-5">
                <table className="table table-bordered" border="0">
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

                        {contactos.map((elemento) => (
                            <tr className='mt-3' key={elemento.id}>
                                <td style={{ width: 109 }}>{elemento.Nombre}</td>
                                <td style={{ width: 109 }}>{elemento.Apellido}</td>
                                <td style={{ width: 109 }}>{elemento.Compañia}</td>
                                <td style={{ width: 109 }}>{elemento.Cargo}</td>
                                <td style={{ width: 109 }}>{elemento.Email}</td>
                                <td style={{ width: 100 }}>{elemento.Celular}</td>
                                <td style={{ width: 109 }}>{elemento.Direccion}</td>
                                <td style={{ width: 109 }}>{elemento.Ciudad}</td>
                                <td style={{ width: 150, textAlign: 'center' }}>
                                    <Button value={elemento.id} id='botonVentanaModalEditar' onClick={() => seleccionarContacto(elemento)} type="button" className="btn btn-primary" style={{ width: 50 }}>
                                        <i className="fa fa-edit"></i>
                                    </Button>
                                    &nbsp;
                                    <Button className="btn btn-danger" style={{ width: 50 }}>
                                        <i className="fa fa-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}

                        <Modal id='ventanaModalEditar' isOpen={showEditar} onHide={handleClose} style={{ marginBottom: 0 }}>

                            <ModalHeader>
                                <div className="container" >
                                    <h1 >Editar Contacto</h1>
                                </div>
                            </ModalHeader>

                            <ModalBody>

                                <FormGroup>
                                    <Label for="nombre">Nombre</Label>
                                    <Input type="text" id="nombre" name='Nombre' value={formValues && formValues.Nombre} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="apellido">Apellido</Label>
                                    <Input type="text" id="apellido" name='Apellido' value={formValues && formValues.Apellido} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="compañia">Compañia</Label>
                                    <Input type="number" id="compañia" name='Compañia' value={formValues && formValues.Compañia} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="cargo">Cargo</Label>
                                    <Input type="text" id="cargo" name='Cargo' value={formValues && formValues.Cargo} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" id="email" name='Email' value={formValues && formValues.Email} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="movil">Celular</Label>
                                    <Input type="number" id="movil" name='Celular' value={formValues && formValues.Celular} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="direccion">Dirección</Label>
                                    <Input type="text" id="direccion" name='Direccion' value={formValues && formValues.Direccion} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="ciudad">Ciudad</Label>
                                    <Input type="text" id="ciudad" name='Ciudad' value={formValues && formValues.Ciudad} onChange={handleChange} />
                                </FormGroup>

                            </ModalBody>

                            <ModalFooter>
                                <Button type="button" className="btn btn-primary" style={{ width: '100px' }}>
                                    Guardar
                                </Button>
                                &nbsp;
                                <Button onClick={handleClose} type="button" className="btn btn-danger" style={{ width: '100px' }}>
                                    Cerrar
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </tbody>
                </table>
            </div>
        
        );
    }
}

export default Contactos;