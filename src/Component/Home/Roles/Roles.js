import React, { useEffect, useState } from 'react';

const Roles = () => {
    const [user, setUser] = useState([''])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
        // .then(data => console.log(data))
    }, [])
    return (
        <div className="content container">

            <div className="div">
                <li>
                    <p className="header-p">Dashboard <span style={{ color: 'black' }}>//</span> Admin</p>
                    <p className="only-p">Add, Edit, Delete Roles</p>
                </li>
                <li>
                    <button className="button mt-3 btn btn-success">Dashboard</button>
                </li>
            </div>
            <br />
            <h6 className="Summary">Summary</h6>
            <br />
            <div className="big-box d-flex justify-content-center">
                <div className="box d-flex align-items-center justify-content-center">
                    <div>
                        <h6>Total Roles</h6>
                        <p>35 Users</p>
                    </div>
                </div>
                <div className="box d-flex align-items-center justify-content-center">
                    <div>
                        <h6>This Year Roles</h6>
                        <p>25 Users</p>
                    </div>
                </div>
                <div className="box d-flex align-items-center justify-content-center">
                    <div>
                        <h6>This Month Roles</h6>
                        <p>15 Users</p>
                    </div>
                </div>
                <div className="box d-flex align-items-center justify-content-center">
                    <div>
                        <h6>This Week Roles</h6>
                        <p>5 Users</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="div mt-3">
                <li>
                    <button className="twoButton btn btn-outline-success m-1">Download CSV</button>
                    <button className="twoButton btn btn-outline-success m-1">Download PDF</button>
                </li>
                <li>
                    <button className="button btn btn-success m-1">Add Roles</button>
                </li>
            </div>
            <br /><br /><br /><br />
            <table>
                <tr className="th">
                    <th>Roles Id</th>
                    <th>Roles Name</th>
                    <th>Roles Username</th>
                    <th>Roles Email</th>
                    <th>Roles Website</th>
                    <th>Action</th>
                </tr>

                {
                    user.map(user =>
                        <tr style={{ borderBottom: '1px solid black' }}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td><a href={user.website}>{user.website}</a></td>
                            <td>
                                <a style={{ color: 'green', marginRight: '10px' }} href="#">Edit</a>
                                <a style={{ color: 'red', marginRight: '10px' }} href="#">Delete</a>
                            </td>
                        </tr>
                    )
                }

            </table>
        </div>
    );
};

export default Roles;