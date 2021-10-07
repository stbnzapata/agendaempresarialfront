import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../css/header.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';

export default function Buscador() {

    // const [state, setState] = React.useState(false);

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
                            <Button onClick={handleShow} type="button" className="btn btn-primary">
                               Ingresar
                            </Button>
                            <Modal isOpen={show} onHide={handleClose}>
                                <ModalHeader>
                                    <div className="container">
                                        <h1>Crear Contacto</h1>
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <FormGroup>
                                        <Label for="nombre">Nombre</Label>
                                        <Input type="text" id="nombre" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="apellido">Apellido</Label>
                                        <Input type="text" id="apellido" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="compañia">Compañia</Label>
                                        <Input type="text" id="compañia" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="cargo">Cargo</Label>
                                        <Input type="text" id="cargo" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="email">Email</Label>
                                        <Input type="email" id="email" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="movil">Movil</Label>
                                        <Input type="num" id="movil" />
                                    </FormGroup>                                    
                                    <FormGroup>
                                        <Label for="direccion">Dirección</Label>
                                        <Input type="text" id="direccion" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="ciudad">Ciudad</Label>
                                        <Input type="text" id="ciudad" />
                                    </FormGroup>
                                    
                                    
                                </ModalBody>
                                <ModalFooter>
                                <Button onClick={handleClose} type="button" className="btn btn-primary">
                                    cerrar
                                </Button>
                                </ModalFooter>                                
                            </Modal>
                        </div>

            
                    </div>
                </div>
            </div>


        </div>

    );
}