import React, { useEffect, useState } from 'react';
import './Home.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import User from './User/User';
import Group from './Group/Group';
import Roles from './Roles/Roles';
import SideBar from './SideBar/SideBar';
import Tools from './Tools/Tools';

const Home = () => {
    const [user, setUser] = useState([''])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    return (
        <div className="home mt-5">

            <Router>
                <div className="row">
                    <div className="col-md-2">
                        <Tools></Tools>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-10">
                                <Switch>
                                    <Route exact path="/">
                                        <User />
                                    </Route>
                                    <Route path="/manage-user">
                                        <User user={user} />
                                    </Route>
                                    <Route path="/manage-group">
                                        <Group />
                                    </Route>
                                    <Route path="/manage-roles">
                                        <Roles />
                                    </Route>
                                </Switch>
                            </div>
                            <div className="col-md-2 m-0 p-0">
                                <SideBar />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Home;