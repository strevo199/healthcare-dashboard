const appointmentReducer = (state,action) =>{
    switch (action.type) {
        case 'PAGINATION':
            return {...state,currentPage:action.payload};
        break
    
        case 'DELETEAPPOINTMENT':
            return {...state,appointments:state.appointments.filter(item =>(item.id !==action.payload))}
        default:
            return state;
    }
}


export default appointmentReducer