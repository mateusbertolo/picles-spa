import { IShelter, IUpdateShelterRequest, IUpdateShelterResponse } from "../../../interfaces/shelter";
import httpClient from "../../../services/api/httpClient";

export async function updateShelter(params:IUpdateShelterRequest): Promise<IUpdateShelterResponse>{
    try{
        const response = await httpClient.put<IUpdateShelterResponse>('./shelter', params)
        return response.data
    }catch{
        console.error('Erro ao atualizar abrigo', console.error)
        throw console.error
        
    }
}