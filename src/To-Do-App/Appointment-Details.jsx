import axios from "axios";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { AddAppointment } from "./add-appointment";
import { useDispatch } from "react-redux";
import { addToShared } from "../slicers/task-slicers";


export function AppointmentDetails() {

    const [cookies, setCookie, removeCookie] = useCookies(['userid', 'username']);
    const [appointments, setAppointments] = useState([{ id: '', title: '', description: '', date: new Date(), user_id: '' }]);

    let navigate = useNavigate();

    let searchString = useOutletContext();
    let dispatch = useDispatch();

    const LoadAppointments = useCallback(() => {
        axios.get('http://localhost:3000/appointments')
            .then(Response =>
                setAppointments(Response.data)
            )
    }, []);

    const userAppointments = useMemo(() => {
        return appointments.filter(appointment => appointment.user_id === cookies['userid'])
    }, [appointments, cookies]);

    const filteredAppointment = useMemo(() => {

        if (searchString === "") {
            return userAppointments;
        }
        else {
            return userAppointments.filter(appointment => appointment.title.toLowerCase().includes(searchString.toLowerCase()));
        }

    }, [searchString, userAppointments]);

    useEffect(() => {

        LoadAppointments();

    }, [])

    function handleShareClick(appointment) {
        let stat = confirm(`Are yor sure ? What to share\n ${appointment.title}`)
        if (stat === true) {
            dispatch(addToShared(appointment));
            navigate('/dashboard/details');
        }
    }

    return (
        <div className="mt-4">
            <table className="table table-hover caption-top">

                <thead>
                    <tr>
                        <th> Title </th>
                        <th> Date </th>
                        <th> Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        filteredAppointment.map(appointment =>
                            <tr key={appointment.id}>
                                <td>{appointment.title}</td>
                                <td>{moment(appointment.date).format('DD dddd, MMMM yyyy')}</td>
                                <td>
                                    <Link to={`/dashboard/edit-appointment/${appointment.id}`} className="btn btn-warning bi bi-pen-fill"></Link>
                                    <Link to={`/dashboard/delete-appointment/${appointment.id} `} className="btn btn-danger bi bi-trash-fill mx-2"></Link>

                                    <button onClick={() => { handleShareClick(appointment) }} className="btn btn-light bi bi-share-fill" ></button>
                                </td>
                            </tr>
                        )

                    }
                </tbody>
            </table>
        </div>
    )
}