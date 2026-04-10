import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Login } from "../To-Do-App/Todo-login";
import { Register } from "../To-Do-App/Todo-register";
import { Home } from "../To-Do-App/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login width='w-25' />
            },
            {
                path: '/register',
                element: <Register width='w-25' />
            }
        ]
    }

])

export default router;