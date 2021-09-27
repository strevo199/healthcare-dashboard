import React,{lazy,Suspense, useContext} from 'react'
import HospitalLineGraph from '../../Charts/HospitalLineGraph'
import IncomeInCurrentMonth from '../../Charts/IncomeInCurrentMonth'
import IncomeInCurrentWeek from '../../Charts/IncomeInCurrentWeek'
import { ApponitmentContext } from '../../context/ApponitmentContext'

const DashboardBody = () => {
    const {appointments} = useContext(ApponitmentContext)
    console.log(appointments[0]);

    return (
        <div className="dashboard  flex-1 flex flex-col bg-purple-50">
            <div className ="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 h-36 md:h-28">
                <div className=" bg-white  md:h-4/5 h-full flex-1 flex justify-evenly items-center shadow-xl rounded-lg">
                    <i class="fa fa-medkit text-blue-400 text-3xl" aria-hidden="true"></i>
                    <div className="font-semibold">
                        <h1 className="text-sm ">Appointments</h1>
                        <h1 className="text-blue-400 text-lg">213</h1>
                    </div>
                </div>
                <div className=" bg-white  md:h-4/5 h-full flex-1 flex justify-evenly items-center shadow-xl rounded-lg">
                    <i class="fa fa-medkit text-blue-400 text-3xl" aria-hidden="true"></i>
                    <div className="font-semibold">
                        <h1 className="text-sm ">Appointments</h1>
                        <h1 className="text-blue-400 text-lg">213</h1>
                    </div>
                </div>
                <div className=" bg-white  md:h-4/5 h-full flex-1 flex justify-evenly items-center shadow-xl rounded-lg">
                    <i class="fa fa-medkit text-blue-400 text-3xl" aria-hidden="true"></i>
                    <div className="font-semibold">
                        <h1 className="text-sm ">Appointments</h1>
                        <h1 className="text-blue-400 text-lg">213</h1>
                    </div>
                </div>
                <div className=" bg-white  md:h-4/5 h-full flex-1 flex justify-evenly items-center shadow-xl rounded-lg">
                    <i class="fa fa-medkit text-blue-400 text-3xl" aria-hidden="true"></i>
                    <div className="font-semibold">
                        <h1 className="text-sm ">Appointments</h1>
                        <h1 className="text-blue-400 text-lg">213</h1>
                    </div>
                </div>
            </div>

            <div className=" grid mb-6  mt-3 gap-5  grid-cols-1 sm:grid-cols-2 overflow-x-hidden w-11/12 mx-auto">
                <div className="sm:col-span-2">
                    <HospitalLineGraph/>
                </div>
                <div className="">
                    <IncomeInCurrentMonth/>
                </div>
                <div className="">
                    <IncomeInCurrentWeek/>
                </div>
                <div className="bg-white shadow-xl flex flex-col rounded-lg sm:col-span-2">
                    <h1 className="  h-12  flex items-center  text-sm font-bold ">Appointment Activity</h1>
                    <div>
                        <table className="w-full text-xs ">
                            <thead >
                                <tr className="bg-gray-200 h-10" key="">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Date</th>
                                    <th>Visit Time</th>
                                    <th>Doctor</th>
                                    <th>Conditions</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="">
                                { appointments ? 
                                (appointments.slice(1,10).map(appointment =>(
                                    <tr className="" key={appointment.id}>
                                        <td className="flex items-center gap-x-1">
                                            <img className="h-8 w-8 rounded-full" src={appointment.img} alt="" />
                                            <h1>{appointment.patientNAme}</h1>
                                        </td>
                                        <td>{appointment.email}</td>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.vistTime}</td>
                                        <td>{appointment.doctor}</td>
                                        <td>{appointment.condition}</td>
                                        <td className="w-8 flex">
                                            <div className="flex-1 justify-evenly flex">
                                                <i class="fa fa-chevron-up text-blue-400 " aria-hidden="true"></i>
                                                <i class="fa fa-trash text-red-600 " aria-hidden="true"></i>
                                            </div>
                                        </td>
                                    </tr>
                                ))) : 
                                (<p>lala</p>) }
                            </tbody>
                        </table>
                    </div>    
                </div>
                
            </div>
        </div>
    )
}

export default DashboardBody
