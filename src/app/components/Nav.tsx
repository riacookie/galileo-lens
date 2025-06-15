import React from 'react';
import { Link } from 'react-router-dom'; // Optional, if you're using React Router

const Nav: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">Galileo lens</div>
      <ul className="flex space-x-4">
        <li><Link to="../earth">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;