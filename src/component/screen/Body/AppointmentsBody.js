import React, { useContext } from 'react'
import { ApponitmentContext } from '../../context/ApponitmentContext'
import Pagination from '../../Pagination';

const AppointmentsBody = () => {
    const {chunkedappointments,handleDelete} = useContext(ApponitmentContext)
    
    

    return (
        <div className="appointments flex flex-1 justify-center">
        <div className="appointments flex w-11/12 flex-col ">

            <h1 className="text-3xl font-semibold text-gray-800 ">Appointments</h1>

                    <div className="flex-1">
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
                                { chunkedappointments() ? 
                                (chunkedappointments().map(appointment =>(
                                    <tr className="border-b-2" key={appointment.id}>
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
                                                <i onClick ={() =>handleDelete(appointment.id)} class="fa fa-trash text-red-600  cursor-pointer" aria-hidden="true"></i>
                                            </div>
                                        </td>
                                    </tr>
                                ))) : 
                                (<p>lala</p>) }
                            </tbody>
                        </table>
                    </div>
                    <Pagination/>
        </div>
        </div>
    )
}

export default AppointmentsBody
