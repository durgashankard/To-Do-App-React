import axios from "axios";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useCookies } from "react-cookie"
import { Outlet, useNavigate, Link } from "react-router-dom";
import store from "../store/store";

export function Dashboard() {

    const [cookies, setCookie, removeCookie] = useCookies(['userid', 'username']);
    const [searchString, SetSearchString] = useState('')

    let navigate = useNavigate();

    const handleSignout = useCallback(() => {
        removeCookie('username');
        removeCookie('userid');
        navigate('/login');
    }, [navigate, removeCookie])

    function handleSearchString(e) {
        SetSearchString(e.target.value);
    }



    useEffect(() => {
        if (!cookies['userid']) {
            navigate('/login');
        }
    }, [cookies, navigate, store]);



    return (
        <div className="container-fluid">
            <div className="p-4 bg-light d-flex justify-content-between" role="header">
                <span>
                    <span className="bi bi-check-square-fill fs-3 fw-bold"> Task Manager</span>

                </span>
                <div>
                    <span className="bi bi-person-circle mx-4 fs-3 fw-bold"> {cookies['username']} </span>

                    <button className="btn btn-primary bi bi-share mx-3 position-relative" data-bs-toggle="offcanvas" data-bs-target="#shared-data"> Shared <span className="position-absolute badge bg-dark rounded rounded-circle"> {store.getState().sharedAppointmentsCount}</span></button>

                    <div className="offcanvas offcanvas-end" id="shared-data">
                        <div className=" offcanvas-header">
                            <h3>Shared Appointment's</h3>
                            <button className="btn btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>

                        <div className="offcanvas-body">
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th> Title </th>
                                        <th> Description</th>
                                        <th>Shared By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.getState().sharedAppointments.map(appointment =>
                                            <tr key={appointment.id}>
                                                <td>{appointment.title}</td>
                                                <td>{appointment.description}</td>
                                                <td>{appointment.user_id}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>

                    </div>

                    <button onClick={handleSignout} className="btn btn-info text-decoration-none ">Signout</button>
                </div>
            </div>
            <div className="row mt-4" role="section">
                <div className="col-2 p-3 fs-5">
                    <div className="bi bi-calendar"> Tasks</div>
                    <div className="bi my-3 bi-clock"> History </div>
                    <div className="bi bi-gear-fill"> Settings</div>
                </div>
                <div className="col-10">
                    <div className="d-flex justify-content-center">
                        <div className="input-group w-50">
                            <input type="text" onChange={handleSearchString} className="form-control" placeholder="Search appointments" />
                            <button className="btn btn-dark bi bi-search"></button>
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="fs-5 fw-bold">Your Appointments</span> <Link to='add-appointment' className="bi btn btn-dark ms-3 bi-plus-lg"></Link>
                        <div>
                            <Outlet context={searchString} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}