import React from 'react';
import { Route, Switch } from 'react-router';
import DashBoardNav from './DashBoardNav';



const BodyNavBar = () => {
    return (
        <div className="flex">
            <DashBoardNav/>
            {/* <Switch>
                <Route path ='/dashboard' component ={DashBoardNav} />
            </Switch> */}
        </div>
    )
}

export default BodyNavBar
