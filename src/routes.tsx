import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
    {
        path: '/pets',
        element: <h3>Pets</h3>,
    },
    {
        path: '/admin',
        element: <h3>admin</h3>,
    },
])