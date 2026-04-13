import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../To-Do-App/Home";
import { Login } from "../To-Do-App/Todo-login";
import { Register } from "../To-Do-App/Todo-register";
import { Dashboard } from "../To-Do-App/Todo-Dashboard";
import { AppointmentDetails } from "../To-Do-App/Appointment-Details";
import { AddAppointment } from "../To-Do-App/Add-Appointment";
import { EditAppointment } from "../To-Do-App/Edit-appointment";
import { DeleteAppointment } from "../To-Do-App/Delete-appointment";

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
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <AppointmentDetails />
            },
            {
                path: 'details',
                element: <AppointmentDetails />
            },
            {
                path: 'add-appointment',
                element: <AddAppointment />
            },
            {
                path: 'edit-appointment/:id',
                element: <EditAppointment />
            },
            {
                path: 'delete-appointment/:id',
                element: <DeleteAppointment />
            }
        ]
    }

])

export default router;