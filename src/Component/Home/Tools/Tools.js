import React from 'react';
import './Tools.css';
import IMG from '../../images/1626338377352.jpg'

const Tools = () => {
    return (
        <div className="tools">
            <img src={IMG} alt="" />
            <li className="active">Admin</li>
            <li>Products</li>
            <li>Setting</li>
            <li>Helps</li>
        </div>
    );
};

export default Tools;