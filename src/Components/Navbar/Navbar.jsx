import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CiHome } from "react-icons/ci";

function Navbar() {
  return (
    <div>
      <nav className="fixed top-0 w-full bg-red-600 shadow-md p-5 z-50  font-bold ">
        <ul className="flex justify-center gap-6">
          <li className="flex items-center gap-1">
            <span><CiHome /></span>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Contactus">Contactus</Link>
          </li>
          
          <li>
            <Link to="*">Not Found</Link>
          </li>
        </ul>
      </nav>
      <div className="pt-16"> 
        <Outlet />
      </div>
    </div>
  );
}

export default Navbar;
