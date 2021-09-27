import React from 'react'
import {Link,useLocation} from 'react-router-dom'

const SideNar = () => {
    const location = useLocation().pathname
    console.log(location);
    return (
        <div className="sideNar hidden flex-col gap-y-4 sm:flex ">
            <div className="fixed h-full">

                <div className="">
                    <div className="h-16 flex gap-x-4  w-11/12 mx-auto py-2">
                        <img src="../img/logo.jpg " className="rounded-full" alt="" />
                        <h1 className="flex items-center text-blue-700 font-bold">Healthcare</h1>
                    </div>
                </div>
                <div className=" flex">
                    <div className="w-11/12 flex-col mx-auto gap-y-2 flex">
                        <h1 className="text-gray-600 text-sm">MEDICINE</h1>
                        <ul className="flex flex-col gap-y-4">
                            <li className="flex-1 flex">
                                <Link  to ='/dashboard' className={location === '/dashboard'? "flex items-center text-blue-700 gap-x-4":"flex items-center gap-x-4"}>
                                    <i class="fa fa-th-large " aria-hidden="true"></i>
                                    <h1 className="font-bold text-sm">Dashboard</h1>
                                </Link>
                            </li>
                            <li className="flex-1 flex">
                                <Link to ="/appointments" className={location === '/appointments'? "flex items-center text-blue-700 gap-x-4":"flex items-center gap-x-4"}>
                                    <i class="fa fa-stethoscope " aria-hidden="true"></i>
                                    <h1 className="font-bold text-sm">Appointments</h1>
                                </Link>
                            </li>
                            <li className="flex-1 flex">
                                <Link to ="/doctors" className={location === '/doctors'? "flex items-center text-blue-700 gap-x-4":"flex items-center gap-x-4"}>
                                    <i class="fa fa-user " aria-hidden="true"></i>
                                    <h1 className="font-bold text-sm">Doctors</h1>
                                </Link>
                            </li>
                            <li className="flex-1 flex">
                                <Link to ="/departments" className={location === '/departments'? "flex items-center text-blue-700 gap-x-4":"flex items-center gap-x-4"}>
                                    <i class="fa fa-user-md " aria-hidden="true"></i>
                                    <h1 className="font-bold text-sm">Departments</h1>
                                </Link>
                            </li>
                            <li className="flex-1 flex">
                                <Link to ="/patients" className={location === '/patients'? "flex items-center text-blue-700 gap-x-4":"flex items-center gap-x-4"}>
                                    <i class="fa fa-wheelchair " aria-hidden="true"></i>
                                    <h1 className="font-bold text-sm">Patients</h1>
                                </Link>
                            </li>
                            <li className="flex-1 flex">
                                <Link to ="/payments" className={location === '/payments'? "flex items-center text-blue-700 gap-x-4":"flex items-center gap-x-4"}>
                                    <i class="fa fa-credit-card " aria-hidden="true"></i>
                                    <h1 className="font-bold text-sm">Payments</h1>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                    <div className="border-t-2 flex justify-center">
                        <Link to ="/help" className={location === '/help'? "flex w-11/12 h-8  items-center gap-x-4 text-blue-700":"flex w-11/12 h-8  items-center gap-x-4"}>
                            <i class="fa fa-info-circle " aria-hidden="true"></i>
                            <h1 className="font-bold text-sm">Help</h1>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default SideNar
