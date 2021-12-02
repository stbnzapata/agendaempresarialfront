import Axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;   

export async function getContactos(){
    try {
        const response = await Axios({
            url: `${baseUrl}`,
            method: 'GET'
        })
        return response
    } catch (error) {
        console.log(error)
    }
}

export async function saveContacto(contactoData){
    
    try {
        console.log(contactoData)

        const formData = new FormData();

        formData.append('Nombre', contactoData.Nombre)
        formData.append('Apellido', contactoData.Apellido)
        formData.append('Compañia', contactoData.Compañia)
        formData.append('Cargo', contactoData.Cargo)
        formData.append('Email', contactoData.Email)
        formData.append('Celular', contactoData.Celular)
        formData.append('Direccion', contactoData.Direccion)
        formData.append('Ciudad', contactoData.Ciudad)

        const response = await Axios({
            url: `${baseUrl}`,
            method: 'POST',
            data: formData,
        })
        return response
        
    } catch (error) {
        console.log(error)
    }
}

export async function getSearch(parameter){

    try {
        let ruta = baseUrl+ "?search=" + parameter;
        
        const response = await Axios({
            url: `${ruta}`,
            method: 'GET',
            
        })
        return response

    } catch (error) {
        console.log(error)
    }
}

export async function deleteContactos(idcontacto){

    try {
        
        let ruta = baseUrl + idcontacto + "/";
        
        const response = await Axios({
            url: `${ruta}`,
            method: 'DELETE',
            
        })
        return response

    } catch (error) {
        console.log(error)
    }
}

export async function updateContactos(datos){

    try {

        const formData = new FormData();

        formData.append('Nombre', datos[1])
        formData.append('Apellido',datos[2])
        formData.append('Compañia', datos[3])
        formData.append('Cargo', datos[4])
        formData.append('Email', datos[5])
        formData.append('Celular', datos[6])
        formData.append('Direccion',datos[7])
        formData.append('Ciudad', datos[8])

        let id = datos[0];
        let ruta = baseUrl + id + "/";

        const response = await Axios({
            url: `${ruta}`,
            method: 'PUT', 
            data: formData,
        })
        
        return response

    } catch (error) {
        console.log(error)
    }
}
