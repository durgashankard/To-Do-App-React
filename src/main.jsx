import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import { Register } from './To-Do-App/Todo-register.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes.jsx';
import { CookiesProvider } from 'react-cookie';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <CookiesProvider>
      <RouterProvider router={router}></RouterProvider>

    </CookiesProvider>

  </StrictMode>,
)
