import React, { createContext, useReducer } from 'react'
import uuid from 'uuid'
import appointmentReducer from '../reducer/appointmentReducer'
export const ApponitmentContext = createContext()

const initialState = {
    appointments:[
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
        {id:uuid(),img:'../img/admin.jpg',patientNAme:'Lesie Alexander',email:'lesie.alexander@exmaple.com',date:'10/10/2020',vistTime:'09:15 - 09-45am',doctor:'Jacob John',condition:'Mumps Stage II'},
    ],
    currentPage:1,
    postsPerPage:15
}

const ApponitmentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(appointmentReducer, initialState)
    
    const chunkedappointments =() =>{
        const indexOfLastPost = state.currentPage * state.postsPerPage
        const indexOfFirstPost = indexOfLastPost - state.postsPerPage
       const currentPosts = state.appointments.slice(indexOfFirstPost,indexOfLastPost)
       return currentPosts
    }

    const handlePages =(num) =>{
        dispatch({
            type:'PAGINATION',
            payload:num
        })
    }

    const handleDelete =(id) =>{
        dispatch({
            type:'DELETEAPPOINTMENT',
            payload:id
        })
    }

    return (
        <ApponitmentContext.Provider value ={{
            appointments:state.appointments,
            currentPage:state.currentPage,
            postsPerPage:state.postsPerPage,
            chunkedappointments,
            handlePages,
            handleDelete
        }}>
            {children}
        </ApponitmentContext.Provider >
    )
}

export default ApponitmentContextProvider
