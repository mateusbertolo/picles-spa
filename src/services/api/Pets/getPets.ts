import axios from "axios"
import httpClient from "./httpClient"
import { GetPetsRequet } from "../../../interfaces/Pets"


export async function getPets(Params:GetPetsRequet:Promise<GetPetsResponse>){
    try{
        const response = await httpClient.get('/Pets')
        return response.data
    }catch{Error}{
        console.log'Erro ao cadastrar Pets', console.error();
        throw.error
        
    }


    }
export function response = await httpClient.get('/Pets')

