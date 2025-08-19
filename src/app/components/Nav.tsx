"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
const Nav: React.FC = () => {
  const navbarRef = useRef<HTMLElement | null>(null);

	
	return (
		<header className="fixed top-0 left-0 right-0 z-50 border-b border-none bg-white-900/50 backdrop-blur-sm">
			<nav ref={navbarRef} id="navbar" className="p-5 flex justify-between">
				<Link className="font-bold text-white text-4xl" href="../">
					Galileo lens
				</Link>

        <div className="flex items-center space--4">
          <ul className="flex space-x-6 text-2xl">
            <li className="nav-underline-animate">
              <Link
                className="duration-300 ease-in-out text-slate-300 inline-block nav-text-hover"
                href="../earth"
              >
                Earth
              </Link>
            </li>
            <li className="nav-underline-animate">
              <Link
                className="duration-300 ease-in-out text-slate-300 inline-block nav-text-hover"
                href="../luna"
              >
                Luna
              </Link>
            </li>
            <li className="nav-underline-animate">
              <Link
                className="duration-300 ease-in-out text-slate-300 inline-block nav-text-hover"
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
