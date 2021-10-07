import React, {useEffect} from 'react';
import Login from './Components/login';
import PaginaInicio from './Components/pagina_inicio';
import {app} from './fb';
// import { BrowserRouter as Router, Switch, Route, link } from 'react-router-dom';

function App() {

  const [usuario, setUsuario] = React.useState(null);
  
  useEffect(()=>{
    app.auth().onAuthStateChanged((usuarioFirebase)=>{
      console.log('Ya tienes la sesion iniciada con: ', usuarioFirebase);
      setUsuario(usuarioFirebase);
    })
  },[]);

  return (
    // <Router>
      <div className="App">
             
          {usuario?<PaginaInicio/>:<Login setUsuario={setUsuario}/>} 
        
      </div>
    // </Router>    
  );
}

export default App;
