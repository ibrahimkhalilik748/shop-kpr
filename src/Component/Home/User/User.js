import React, { useEffect, useState } from 'react';
import './User.css';


const User = (props) => {
    const [user, setUser] = useState([''])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
        // .then(data => console.log(data))
    }, [])
    // const {name, username, id, email, phone, website} = props.user;
    return (
        <div className="content container">

            <div className="div">
                <li>
                    <p className="header-p">Dashboard <span style={{ color: 'black' }}>//</span> Admin</p>
                    <p className="only-p">Add, Edit, Delete User</p>
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
                        <h6>admin</h6>
                        <p>5 Users</p>
                    </div>
                </div>
                <div className="box d-flex align-items-center justify-content-center">
                    <div>
                        <h6>User</h6>
                        <p>10 Users</p>
                    </div>
                </div>
                <div className="box d-flex align-items-center justify-content-center">
                    <div>
                        <h6>Group</h6>
                        <p>10 Users</p>
                    </div>
                </div>
                <div className="box d-flex align-items-center justify-content-center">
                    <div>
                        <h6>Roles</h6>
                        <p>10 Users</p>
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
                    <button className="button btn btn-success m-1">Add User</button>
                </li>
            </div>
            <br /><br /><br /><br />
            <table>
                <tr className="th">
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>

                {
                    user.map(user =>
                        <tr style={{ borderBottom: '1px solid black' }}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
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

export default User;