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