"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const Nav: React.FC = () => {
	const navbarRef = useRef<HTMLElement | null>(null);
	const [lastScroll, setLastScroll] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;
			const navbar = navbarRef.current;

			if (navbar) {
				if (currentScroll > lastScroll) {
					navbar.classList.add("hidden");
				} else {
					navbar.classList.remove("hidden");
				}
			}

			setLastScroll(currentScroll);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [lastScroll]);

	return (
		<header className="fixed top-0 left-0 right-0 border-b border-none bg-white-900/50 backdrop-blur-sm">
			<nav ref={navbarRef} id="navbar" className="p-5 flex justify-between">
				<Link className="font-bold text-4xl" href="../">
					Galileo lens
				</Link>

				<div className="flex items-center space--4">
					<ul className="flex space-x-6 hover text-slate-300 text-2xl">
						<li className="nav-underline-animate">
							<Link
								className="duration-300 ease-in-out inline-block nav-text-hover"
								href="../earth"
							>
								Earth
							</Link>
						</li>
						<li className="nav-underline-animate">
							<Link
								className="duration-300 ease-in-out inline-block nav-text-hover"
								href="../luna"
							>
								Luna
							</Link>
						</li>
						<li className="nav-underline-animate">
							<Link
								className="duration-300 ease-in-out inline-block nav-text-hover"
								href="../satellite"
							>
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
