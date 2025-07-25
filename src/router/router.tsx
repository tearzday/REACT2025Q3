import AboutUsPage from '@/pages/about-us/AboutUsPage';
import DetailsPage from '@/pages/details/Details';
import ErrorPage from '@/pages/error/ErrorPage';
import HomePage from '@/pages/home/HomePage';

const router = [
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ':cardId',
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: 'about',
    element: <AboutUsPage />,
  },
];

export default router;
