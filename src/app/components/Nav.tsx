"use client";
import React from "react";
import Link from "next/link";
const Nav: React.FC = () => {

	let LastScroll = window.scrollY;
	const navbar = document.getElementById("navbar");

	window.addEventListener("scroll", () => {
		if (navbar) {
			if (window.scrollY > LastScroll) {
				navbar.classList.add("hidden");
			} else {
				navbar.classList.remove("hidden");
			}
			LastScroll = window.scrollY;
		}
	});

	return (
	<header className="fixed top-0 left-0 right-0 border-b border-none bg-white-900/50 backdrop-blur-sm">
	<nav id="navbar" className="p-5 flex justify-between">
		<Link className="font-bold text-4xl" href="../">Galileo lens</Link>

      <div className="flex items-center space--4">
			<ul className="flex space-x-6 hover text-slate-300 text-2xl">
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
	</header>
	);
};

export default Nav;
