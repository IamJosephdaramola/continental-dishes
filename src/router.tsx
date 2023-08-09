import { createBrowserRouter } from 'react-router-dom';
import { Home, ErrorBoundary, RecipeDetails } from './pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorBoundary />,
    },
    {
        path: '/recipes/:id',
        element: <RecipeDetails />,
    },
]);

export { router };
