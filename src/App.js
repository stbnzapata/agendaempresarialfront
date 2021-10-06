import React, {useEffect} from 'react';
import Login from './Components/login';
import PaginaInicio from './Components/pagina_inicio';
import {app} from './fb';


function App() {

  const [usuario, setUsuario] = React.useState(null);
  
  useEffect(()=>{
    app.auth().onAuthStateChanged((usuarioFirebase)=>{
      console.log('Ya tienes sesion la sesion iniciada con: ', usuarioFirebase);
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
