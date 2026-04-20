import { useEffect } from "react";
import { Login } from "./Todo-login";
import { Register } from "./Todo-register";
import store from "../store/store";


export function Home() {

    useEffect(() => { }, [store])

    return (
        <div className="row mt-5">
            <div className='col mt-3'>
                <div className='fs-1 mt-5 fw-bold w-75 mt-4 ms-5 ps-5'>
                    Stay organized, <span className='text-primary'>achieve more</span> every day.
                </div>
                <div className='ms-5 ps-5 mt-5 w-75'>
                    The minimalist to-do list designed for high achievers. Manage complex projects, track deadlines, and sync across all your devices seamlessly.
                </div>
            </div>
            <div className='col'>
                <div className='ms-5 ps-5 mt-5 w-75 pe-4 rounded rounded-2'>
                    <ul className='nav nav-tabs'>
                        <li className='nav-item'>
                            <a href='#login' data-bs-toggle='tab' className='nav-link active'> Login </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#register' data-bs-toggle='tab' className='nav-link'> Register </a>
                        </li>
                    </ul>
                    <div className='tab-content'>
                        <div className='tab-pane active' id='login'>
                            <Login />
                        </div>
                        <div className='tab-pane' id='register'>
                            <Register />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}