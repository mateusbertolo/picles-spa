import { GetPetsResponse } from "../interfaces/pet";
import { GetPets } from "../services/pets/getPets";

export function usePetList(){
   
    interface IUsePetList{
        date: GetPetsResponse
        isLoading: Boolean
    }
    export function usePetList(params: GetPetsResponse):IUsePetList{
    const { data, isLoading } = useQuery({
        queryKey: ['get-pets', params], // This should be a string
        queryFn: () => GetPets(params), // Corrected spelling of queryFn
    });
    return {data, isLoading}
}}