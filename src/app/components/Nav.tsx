"use client";
import React from "react";
import Link from "next/link";

const Nav: React.FC = () => {
	return (
		<nav className="bg-gray-800 text-white p-4 flex justify-between">
			<div className="font-bold text-xl">Galileo lens</div>
			<ul className="flex space-x-4">
				<li>
					<Link href="../earth">earth</Link>
				</li>
				<li>
					<Link href="../luna">luna</Link>
				</li>
				<li>
					<Link href="../satellite">satellite</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
