import axios from "axios"
import httpClient from "./httpClient"


export async function getPets(){
    try{
        const response = await httpClient.get('/Pets')
        return response.data
    }catch{Error}{

    }


    }
export function response = await httpClient.get('/Pets')