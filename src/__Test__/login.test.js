const fb = require('../fb')

describe('Comprobar datos de conexion a firebase', () =>{
    test('Se comprueba coincidencia de datos', ()=>{

        const app = {
            apiKey: "AIzaSyDhUuw2pw47wY9_w9Voum5Y2aIUCZXP_kI",
            authDomain: "agendaempresarial-29156.firebaseapp.com",
            projectId: "agendaempresarial-29156",
            storageBucket: "agendaempresarial-29156.appspot.com",
            messagingSenderId: "107249462184",
            appId: "1:107249462184:web:934c1d93de1e72a286cb9d"            
        }

        expect(app).toMatchObject(fb.app.options)
    });
})