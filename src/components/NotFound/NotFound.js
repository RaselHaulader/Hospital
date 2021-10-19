import React from 'react';
import './NotFound.css';
import {NavLink } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="notFound-page d-flex justify-content-center align-items-start p-1">
            <NavLink to="/" className='btn btn-primary'>Home</NavLink>
        </div>
    );
};

export default NotFound;