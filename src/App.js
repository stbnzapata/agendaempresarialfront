import React, {useEffect, useState} from 'react';
import Login from './Components/login';
import PaginaInicio from './Components/pagina_inicio';
import {app} from './fb';

function App() {

  const [usuario, setUsuario] = useState(null);
  
  useEffect(()=>{
    app.auth().onAuthStateChanged((usuarioFirebase)=>{
      console.log('Ya tienes la sesion iniciada con: ', usuarioFirebase);
      setUsuario(usuarioFirebase);
    })
  },[]);

  return (
      <div className="App">        
          {usuario?<PaginaInicio/>:<Login setUsuario={setUsuario}/>}         
      </div>   
  );
}

export default App;
