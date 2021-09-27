import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const DashBoardNav = () => {
    const location = useLocation().pathname
    return (
        <div className="bg-purple-50 sm:h-20 h-28 flex-col flex flex-1">
            <div className="flex-1 justify-center flex">
                <div className="w-11/12 flex justify-between">
                    <div className=" flex items-center flex-1">
                        <div className="flex flex-1 items-center sm:hidden">
                            <img src="../img/logo.jpg" className="rounded-full h-10 w-10"  alt="" />
                            <h1 className="text-blue-600 font-semibold text-">Healthcare</h1>
                        </div>
                        <div className="relative flex sm:ml-0 ml-12  items-center">
                            <i className="fa fa-search left-2  absolute text-gray-400" aria-hidden="true"></i>
                            <input type="search " placeholder ="Search" className="h-9 focus:outline-none px-7  rounded-3xl" />
                        </div>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-x-3">
                            <div className="relative flex items-center">
                                <i className="fa fa-bell  text-gray-400 text-2xl absolute top-1 right-1" aria-hidden="true"></i>
                                <h1 className ="text-white bg-red-600 z-10 rounded-full h-4 w-4 text-xs flex items-center justify-center">9</h1>
                            </div>
                            <img src="../img/admin.jpg" className ="rounded-full h-10 object-cover w-10" alt="" />
                    </div>
                </div>
                
            </div>
             <div className=" sm:hidden mb-2 h-10 flex justify-center">
                <ul className="w-11/12 flex justify-between gap-x-1">
                    <li className="flex-1 justify-center items-center flex"><Link className={location ==='/dashboard' ?"font-bold text-xs text-blue-700":"font-bold text-xs"} to ="/dashboard">Dashboard</Link></li>
                    <li className="flex-1 justify-center items-center flex"><Link className={location ==='/appointments' ?"font-bold text-xs text-blue-700":"font-bold text-xs"} to ="/appointments">Appointments</Link></li>
                    <li className="flex-1 justify-center items-center flex"><Link className={location ==='/doctors' ?"font-bold text-xs text-blue-700":"font-bold text-xs"} to ="/doctors">Doctors</Link></li>
                    <li className="flex-1 justify-center items-center flex"><Link className={location ==='/departments' ?"font-bold text-xs text-blue-700":"font-bold text-xs"} to ="/departments">Departments</Link></li>
                    <li className="flex-1 justify-center items-center flex"><Link className={location ==='/patients' ?"font-bold text-xs text-blue-700":"font-bold text-xs"} to ="/patients">Patients</Link></li>
                    <li className="flex-1 justify-center items-center flex"><Link className={location ==='/payments' ?"font-bold text-xs text-blue-700":"font-bold text-xs"} to ="/payments">Payments</Link></li>
                    <li className="flex-1 justify-center items-center flex"><Link className={location ==='/help' ?"font-bold text-xs text-blue-700":"font-bold text-xs"} to ="/help">Help</Link></li>
                    
                </ul>
            </div>
        </div>
    )
}

export default DashBoardNav