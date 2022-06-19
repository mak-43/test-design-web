import React from 'react';
import { Routes, Route, Link,NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="py-5 flex justify-center items-center gap-10 bg-base-200">
            <NavLink className='rounded-lg bg-base-300 p-2 hover:bg-base-100 border text-black' to='/'>Home</NavLink>
            <NavLink className='rounded-lg bg-base-300 p-2 hover:bg-base-100 border text-black' to='/contact'>Contact</NavLink>
        </div>
    );
};

export default Navbar;