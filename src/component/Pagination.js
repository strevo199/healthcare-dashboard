import React, { useContext, useState } from 'react'
import { ApponitmentContext } from './context/ApponitmentContext'

const Pagination = () => {
    const {postsPerPage,currentPage,handlePages,appointments} = useContext(ApponitmentContext)
    const [totalPosts] = useState(appointments.length)
    const pageNumbers = []

    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <nav className="h-10 w-full">
                <ul className="flex flex-1 justify-center gap-x-6">
                    {
                    pageNumbers.map(number => (
                        <li onClick = {()=>handlePages(number)} className={currentPage === number ?"bg-green-900 w-7 h-7 items-center cursor-pointer flex justify-center rounded-lg text-white":"hover:bg-green-900 bg-green-400 w-7 h-7 items-center cursor-pointer flex justify-center rounded-lg shadow-md text-white"}>{number}</li>
                    ))}
                </ul>
        </nav>
    )
}

export default Pagination
