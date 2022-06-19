import React from 'react';
import { Routes, Route, Link,NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="my-5 flex justify-evenly items-center">
            <NavLink className='rounded-lg bg-base-300 p-2 hover:bg-base-100 border' to='/'>Home</NavLink>
            <NavLink className='rounded-lg bg-base-300 p-2 hover:bg-base-100 border' to='/contact'>Contact</NavLink>
        </div>
    );
};

export default Navbar;