import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/contactos.css';
import Buscador from './buscador';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { deleteContactos, updateContactos, getContactos } from '../services';
import swal from 'sweetalert';



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

    // async function loadContactos() {
    //     try {
    //         const response = await getContactos();
    //         if (response.status === 200) {

    //             //setContactos(response.data);

    //         }
    //         return response
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const seleccionarContacto = (elemento) => {

        setFormValues(elemento);
        setShowEditar(true);

    }

    

    async function actualizarContacto() {
        
        //variables del formulario
        var id = document.getElementById("id").value;
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var compania = document.getElementById("compania").value;
        var cargo = document.getElementById("cargo").value;
        var email = document.getElementById("email").value;
        var movil = document.getElementById("movil").value;
        var direccion = document.getElementById("direccion").value;
        var ciudad = document.getElementById("ciudad").value;

        var datos = [
            id,
            nombre,
            apellido,
            compania,
            cargo,
            email,
            movil,
            direccion,
            ciudad,
        ] ; 

       
       
        try {
            const response = await updateContactos(datos)
            if (response.status === 200) {
                swal({
                    title: '¡Actualizado!',
                    text: "Contacto Actualizado Correctamente.",
                    type: 'success',
                }).then(function () {
                    //setShowEditar(false);
                    //loadContactos();
                    window.location.reload(true);
                })
                console.log(response.data)
            }
            return response
        } catch (error) {
            console.log(error)
        }
    }
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues)
    }

    const handleClose = () => {
        setShowEditar(false);
    }

    const handleDelete = (idcontacto) => {

        swal({
            title: '¿Eliminara un contato?',
            text: 'Esta seguro, no hay vuelta atras!',
            type: 'warning',
            icon: 'warning',
            buttons: ["No", "Si"]
        }).then(respuesta => {
            // código que elimina
            if (respuesta) {
                EliminarContacto(idcontacto);
            } else {
                swal(
                    'Cancelaste la accion',
                    'Muy bien que lo pensaste',
                    'error'
                )
            }

        }

        )
    }

    async function EliminarContacto(idcontacto) {
        try {
            const response = await deleteContactos(idcontacto)

            if (response.status === 204) {

                swal({
                    title: 'Elimado!',
                    text: "Contacto Eliminado Correctamente.",
                    type: 'success',
                }).then(function () {
                    window.location.reload(true);
                })

                console.log(response.data)
            }
            return response
        } catch (error) {
            console.log(error)
        }
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
                                    <Button
                                        value={elemento.id}
                                        onClick={() => handleDelete(elemento.id)}
                                        className="btn btn-danger" style={{ width: 50 }}>
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
                                    <Input type="hidden" id="id" name='id' value={formValues && formValues.id} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="apellido">Apellido</Label>
                                    <Input type="text" id="apellido" name='Apellido' value={formValues && formValues.Apellido} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="compañia">Compañia</Label>
                                    <Input type="number" id="compania" name='Compañia' value={formValues && formValues.Compañia} onChange={handleChange} />
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
                                <Button type="button" onClick={actualizarContacto} className="btn btn-primary" style={{ width: '100px' }}>
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