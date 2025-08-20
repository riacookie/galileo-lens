"use client";
import React, { useRef } from "react";
import Link from "next/link";
const Nav: React.FC = () => {
  const navbarRef = useRef<HTMLElement | null>(null);

  return (
    <header className="bg-white-900/50 fixed top-0 right-0 left-0 z-50 border-b border-none backdrop-blur-sm">
      <nav ref={navbarRef} id="navbar" className="flex justify-between p-5">
        <Link className="text-4xl font-bold text-white" href="../">
          Galileo lens
        </Link>

        <div className="space--4 flex items-center">
          <ul className="flex space-x-6 text-2xl">
            <li className="nav-underline-animate">
              <Link
                className="nav-text-hover inline-block text-slate-300 duration-300 ease-in-out"
                href="../earth"
              >
                Earth
              </Link>
            </li>
            <li className="nav-underline-animate">
              <Link
                className="nav-text-hover inline-block text-slate-300 duration-300 ease-in-out"
                href="../luna"
              >
                Luna
              </Link>
            </li>
            <li className="nav-underline-animate">
              <Link
                className="nav-text-hover inline-block text-slate-300 duration-300 ease-in-out"
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
