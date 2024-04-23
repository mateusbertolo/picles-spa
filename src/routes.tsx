import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Pets } from './pages/Pets';
import { PetDetails } from './pages/PetDetails';
import { PetList } from './pages/Admin/PetList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pets',
    children: [
      {
        index: true,
        element: <Pets />,
      },
      {
        path: '/pets/:id',
        element: <PetDetails />,
      },
    ],
  },
  {
    path: '/admin',
    children: [
      {
        index: true,
        element: <shelter />,
      },
      {
        path: '/admin/pets',
        children: [
          {
            index: true,
            element: <PetList />,
          },
        ]
      },
    ]
  }
]);

export default router;
