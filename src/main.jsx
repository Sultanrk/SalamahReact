import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Home from './routes/home.jsx';
import Dashboard from './routes/dashboard.jsx';
import Activity from './routes/activity.jsx';
import Reports from './routes/reports.jsx';
import Aichatbot from './routes/aichatbot.jsx';
import './index.css';
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "activity", element: <Activity /> },
      { path: "reports", element: <Reports /> },
      { path: "aichatbot", element: <Aichatbot /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);