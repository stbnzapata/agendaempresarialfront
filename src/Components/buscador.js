import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/header.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import { getContactos, saveContacto, getSearch } from '../services';
import '../css/contactos.css';
import Contactos from './contactos';

export default function Buscador() {

    const [show, setShow] = useState(false);
    const [contactos, setContactos] = useState([]);
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

    const handleClose = () => {
        setFormValues({});
        setShow(false);
    }
    const handleShow = () => setShow(true);

    async function loadContactos() {
        try {
            const response = await getContactos();
            console.log(response)
            if (response.status === 200) {
                setContactos(response.data);
                console.log(response.data);
            }
            return response
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadContactos();
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const _handleSubmit = (event) => {
        event.preventDefault();
        handleSubmit({ ...formValues })
    }

    const handleSubmit = async (data) => {
        try {
            await saveContacto(data);
            loadContactos();
            setFormValues({});
            setShow(false);
            alert('Los datos del contacto se han guardado satisfactoriamente.');            
        } catch (error) {
            alert('Ha ocurrido un error guardando los datos del contacto.')
        }

    }

    const search_handleSubmit = (event) => {
        event.preventDefault();
        let parameter = document.getElementById('form1search').value;
        searchContactos(parameter)

    }

    async function searchContactos(parameter) {
        try {
            const response = await getSearch(parameter)
            if (response.status === 200) {
                setContactos(response.data);
                console.log(response.data)
            }
            return response
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="container bus-btn">
                <div className="row">
                    <div className="buscador-e">
                        <div className="buscador col-2">
                            <div className="input-group">
                                <div className="form-outline" style={{ marginLeft: 35 }}>
                                    <input type="search" id="form1search" className="form-control" />
                                </div>
                                <button onClick={search_handleSubmit} type="button" className="btn btn-primary">
                                    Buscar
                                </button>
                            </div>
                        </div>

                        <div className="ingresar">
                            <button id='botonVentanaModal' onClick={handleShow} type="button" className="btn btn-primary">
                                Ingresar
                            </button>
                            <form id='formulario' onSubmit={_handleSubmit} handleSubmit={handleSubmit}>
                                <Modal id='ventanaModal' isOpen={show} onHide={handleClose}>
                                    <ModalHeader>
                                        <div className="container">
                                            <h1>Crear Contacto</h1>
                                        </div>
                                    </ModalHeader>
                                    <ModalBody>

                                        <FormGroup>
                                            <Label for="nombre">Nombre</Label>
                                            <Input type="text" id="nombre" name='Nombre' value={formValues.Nombre} onChange={handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="apellido">Apellido</Label>
                                            <Input type="text" id="apellido" name='Apellido' value={formValues.Apellido} onChange={handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="compañia">Compañia</Label>
                                            <Input type="number" id="compañia" name='Compañia' value={formValues.Compañia} onChange={handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="cargo">Cargo</Label>
                                            <Input type="text" id="cargo" name='Cargo' value={formValues.Cargo} onChange={handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input type="email" id="email" name='Email' value={formValues.Email} onChange={handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="movil">Celular</Label>
                                            <Input type="number" id="movil" name='Celular' value={formValues.Celular} onChange={handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="direccion">Dirección</Label>
                                            <Input type="text" id="direccion" name='Direccion' value={formValues.Direccion} onChange={handleChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="ciudad">Ciudad</Label>
                                            <Input type="text" id="ciudad" name='Ciudad' value={formValues.Ciudad} onChange={handleChange} />
                                        </FormGroup>

                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={_handleSubmit} type="button" className="btn btn-primary" style={{ width: '100px' }}>
                                            Guardar
                                        </Button>
                                        &nbsp;
                                        <Button onClick={handleClose} type="button" className="btn btn-danger" style={{ width: '100px' }}>
                                            Cerrar
                                        </Button>
                                    </ModalFooter>
                                </Modal>
                            </form>
                        </div>
                        <Contactos contactos={contactos} />
                    </div>
                </div>
            </div>
        </div>

    );
}