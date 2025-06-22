"use client";
import React from "react";
import Link from "next/link";
const Nav: React.FC = () => {
  



	return (
		<nav className="bg-gray-800 text-white p-4 flex justify-between">
			<div className="font-bold text-xl">Galileo lens</div>

      <div className="flex items-center space--4">
			<ul className="flex space-x-4 hover text-slate-300">
				<li className="nav-underline-animate">
					<Link 
					className="duration-300 ease-in-out inline-block nav-text-hover"
					href="../earth">
						Earth
					</Link>
				</li>
				<li className="nav-underline-animate">
					<Link 
					className="duration-300 ease-in-out inline-block nav-text-hover"
					href="../luna">
						Luna
					</Link>
				</li>
				<li className="nav-underline-animate"> 
					<Link 
					className="duration-300 ease-in-out inline-block nav-text-hover" 
					href="../satellite">
						Satellite
					</Link>
				</li>
			</ul>
      </div>

		</nav>
	);
};

export default Nav;
