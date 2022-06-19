import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="my-5 flex justify-evenly items-center">
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    );
};

export default Navbar;