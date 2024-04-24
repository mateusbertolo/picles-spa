import { Navigate, Outlet, useOutlet } from "react-router-dom";
import { useShelter } from "../../../hooks/useShelter";

export function AuthHOC() {
    const { data, isLoading } = useShelter();
    const canAccess = !!data?.shelterWhatsApp;

    if (isLoading) return null;
    if (!canAccess) return <Navigate to="/admin" />
    return <Outlet/>


    // Aqui você pode retornar o conteúdo que deseja renderizar caso o usuário tenha acesso
}
