import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
    return (
        <div className="sideBar">
            <nav>
                <ul>
                    <li>
                        <Link to="manage-user">
                            <div className="row">
                                <div className="col-3">
                                    <p className="nmb d-flex justify-content-center align-items-center">01</p>
                                </div>
                                <div className="col-9 text text-start pt-2">
                                    <div>
                                        <p className="m-0 p-0 first-p">MANAGE USERS</p>
                                        <p className="m-0 p-0 second-p">Lets Your Manage User</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="manage-group">
                            <div className="row">
                                <div className="col-3">
                                    <p className="nmb d-flex justify-content-center align-items-center">01</p>
                                </div>
                                <div className="col-9 text text-start pt-2">
                                    <div>
                                        <p className="m-0 p-0 first-p">MANAGE GROUPS</p>
                                        <p className="m-0 p-0 second-p">Lets Your Manage Groups</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <NavLink to="manage-roles" activeClassName="active-link">
                            <div className="row">
                                <div className="col-3">
                                    <p className="nmb d-flex justify-content-center align-items-center">01</p>
                                </div>
                                <div className="col-9 text text-start pt-2 ">
                                    <div>
                                        <p className="m-0 p-0 first-p">MANAGE ROLES</p>
                                        <p className="m-0 p-0 second-p">Lets Your Manage Roles</p>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;