import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pets } from "./pages/Pets";
import { Petsdetails } from "./pages/PetDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/pets',
        children: [
            {
                index:true,
                element:<Pets/>
            },
            {
                path: '/pets/id',
                element: <Petsdetails/>
            }
        ],
    },
    {
        path: '/admin',
        element: <h3>admin</h3>,
    },
])

export default router