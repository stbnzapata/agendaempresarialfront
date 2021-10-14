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

export async function peticionGet(){
    try {
        const response = await Axios({
            url: `https://agendaempresarial.azurewebsites.net/api/contactos/?search=Sara`,
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