
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../media/logo.png';
import '../css/login2.css';
import 'font-awesome/css/font-awesome.min.css';


import { app } from '../fb'

export function validarClave() {

    //document.getElementById('c').addEventListener('input', function () {
    let clave = document.getElementById('c').value;
    let valido = document.getElementById('capax_c');

    //validar que no tenga espacios
    let espacios = false;
    let cont = 0;

    while (!espacios && (cont < clave.length)) {
        if (clave.charAt(cont) === " ")
            espacios = true;
        cont++;
    }

    if (espacios) {
        valido.style.display = "";
        valido.innerText = "La contraseña no puede contener espacios en blanco";
        return false;
    } else {
        valido.style.display = "none";
        return true;
    }

    //});
}

//validar el correo electronico
export function validarEmail() {
    //document.getElementById('l').addEventListener('input', function () {

    let campo = document.getElementById('l');
    let valido = document.getElementById('capax_l');
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    document.getElementById('capax_l').style.display = "";

    // if (emailRegex.test(this.state.email) === true){
    if (emailRegex.test(campo.value)) {
        valido.innerText = "válido";
        return true;
    } else {
        valido.innerText = "incorrecto";
        return false;
    }
    //});
}

export function ocultar(capa) {
    let base = document.getElementById(capa);
    if (base) base.style.display = "none";
}


export default function Login(props) {
    
    const [isRegistrando, setIsRegistrando] = React.useState(false);

    const crearUsuario = (correo, contraseña) =>{
       
        app
            .auth()
            .createUserWithEmailAndPassword(correo, contraseña)
            .then((usuarioFirebase) => {
                console.log('Usuario Creado: ', usuarioFirebase);
                props.setUsuario(usuarioFirebase);  
                alert('Su usuario ha sido creado satisfactoriamente, apartir de este momento puede ingresar a la aplicacion.')  
            }).catch((error)=>{
                let errorCode = error.code;
                let errorMessage = error.message;
                console.log(errorCode, errorMessage)
                let capal = document.getElementById('capax_l');
                capal.style.display = "";
                capal.innerText = "El usuario ha sido creado con anterioridad por favor verifique.";
                //alert('El usuario ha sido creado con anterioridad por favor verifique.')
              
            });
            
    }

    const iniciarSesion = (correo, contraseña) =>{
        app.auth().signInWithEmailAndPassword(correo, contraseña).then((usuarioFirebase)=>{
            console.log('Sesion Iniciada con: ', usuarioFirebase.user);
            props.setUsuario(usuarioFirebase);           
        }).catch((error)=>{
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage)
            //alert('Usuario o Contraseña incorrecta por favor verifique.')
            let email = document.getElementById('l').value;
            let capal = document.getElementById('capax_l');
            var password = document.getElementById('c').value;
            let capac = document.getElementById('capax_c');
    
            if(!email && !password){
                capal.style.display = "";
                capal.innerText = "Ingrese correo y clave";
            }else if (!email) {
                capal.style.display = "";
            }else if (!password) {
                capac.style.display = "";
            }
            
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const correo = e.target.l.value;
        const contraseña = e.target.c.value;
        console.log(correo, contraseña);
        if (isRegistrando){
            crearUsuario(correo, contraseña);
        }
        if(!isRegistrando){
            iniciarSesion(correo, contraseña);
        }
    };

    return (
        <div>
            
            <nav className="redes-slider">
                <ul>
                    <li><a href="https://www.facebook.com/" target="_black"><i className="fa fa-facebook-f"></i><span>Facebook</span></a></li>
                    <li><a href="https://twitter.com/?lang=es" target="_black"><i className="fa fa-twitter"></i><span>Twitter</span></a></li>
                    <li><a href="https://www.instagram.com/" target="_black"><i className="fa fa-instagram"></i><span>Instagram</span></a></li>
                    <li><a href="https://www.youtube.com/" target="_black"><i className="fa fa-youtube"></i><span>Youtube</span></a></li>
                </ul>
            </nav>

            <section id="cont_admin">

                <section className="container">
                    <div className="row justify-content-around">
                        <div id="wrapper" className="col-lg-4 col-md-12">

                            <form action="" method="post" name="forml" id="forml" className="login-form" onSubmit={submitHandler}>

                                <div className="logo_admin">
                                    <img src={logo} alt='logo' />
                                </div>

                                <h6 className="mb-2">{isRegistrando ? "REGISTRO" : "INICIO DE SESION"}</h6>

                                <div className="content">
                                    <input name="l" id="l" type="text" className="input username form-control" placeholder="Email *"
                                        onChange={() => {
                                            validarEmail();
                                        }}
                                        onBlur={() => {
                                            ocultar('capax_l');
                                            ocultar('capax_error');
                                        }} />

                                    <div className="user-icon"></div>

                                    <input name="c" id="c" type="password" className="input password form-control"
                                        placeholder="Clave *"
                                        onChange={() => {
                                            validarClave();
                                        }}
                                        onBlur={() => {
                                            ocultar('capax_c');
                                            ocultar('capax_error');
                                        }} />

                                    <div className="pass-icon"></div>

                                </div>

                                <div id="capax_l" style={{ display: "none" }} className="validacion">Debe ingresar el email</div>
                                <div id="capax_c" style={{ display: "none" }} className="validacion">Debe ingresar la clave</div>
                                <div id="capax_error" style={{ display: "none" }} className="validacion">Usuario o clave son
                                    incorrectos</div>

                                <div className="footer" valign="bottom">
                                    <input type="submit" name="botonera" value={isRegistrando ? "REGISTRARSE" : "INGRESAR"} className="btn btn-dark"
                                        // onClick={() => {
                                        //     valAcceso('forml', 'l,c')
                                        // }}
                                    />
                                </div>

                            </form>

                            <div className="footer" valign="bottom">
                                <input type="button" name="botonera" value={isRegistrando ? "Ya tienes cuenta?" : "No tienes cuenta?"} className="btn btn-dark mt-5" onClick={() => setIsRegistrando(!isRegistrando)}
                                />
                            </div>

                        </div>

                    </div>

                    <div className="row">
                        <div className="info_contacto col-12">
                            <div className="txt">
                                <p className="mb-0">Tel&eacute;fono: (574) 000 00 00 | Direcci&oacute;n: Cra 0 Numero 100 Bloque0|
                                    Colombia</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}


