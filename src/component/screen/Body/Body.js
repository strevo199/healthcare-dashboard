import React from 'react'
import { Switch,Route } from 'react-router-dom';
import AppointmentsBody from './AppointmentsBody';
import BodyNavBar from './BodyNavBar/BodyNavBar';
import DashboardBody from './DashboardBody'
import Departments from './Departments';
import DoctorsBody from './DoctorsBody';
import Help from './Help';
import PatientBody from './PatientBody';
import Payments from './Payments';

const Body = () => {
    return (
        <div className="body flex  flex-1 flex-col">
            <BodyNavBar/>
            <Switch>
                <Route path ='/dashboard' component ={DashboardBody} />
                <Route path ='/doctors' component ={DoctorsBody} />
                <Route path ='/departments' component ={Departments} />
                <Route path ='/help' component ={Help} />
                <Route path ='/payments' component ={Payments} />
                <Route path ='/patients' component ={PatientBody} />
                <Route path ='/appointments' component ={AppointmentsBody} />
            </Switch>
        </div>
    )
}

export default Body
