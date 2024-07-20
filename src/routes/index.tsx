import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import MissionList from '../pages/Missions/MissionList';
import RobotList from '../pages/Robots/RobotList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <div>Here will be the homepage</div>,
      },
      {
        path: '/missions',
        element: <MissionList />,
      },
      {
        path: '/robots',
        element: <RobotList />,
      },
    ],
  }
]);

export default router;
