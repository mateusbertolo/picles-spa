import { GetPetsRequest, GetPetsResponse } from '../../interfaces/pet'
import httpClient from '../api/httpClient'

export async function GetPets(params?: GetPetsRequest):Promise<GetPetsResponse>{

    try{
        const response =await httpClient.get('/pet', {params})
        return response.data

    }catch(error){
        console.log('error ao buscar pets',error)
        throw error

    }
}