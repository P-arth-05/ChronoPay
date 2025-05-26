// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '@/layouts/app-layout.jsx';
import LandingPage from '@/pages/landing.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <LandingPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
