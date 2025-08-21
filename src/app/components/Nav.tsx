"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";
const Nav: React.FC = () => {
  const navbarRef = useRef<HTMLElement | null>(null);

  return (
    <header className="bg-white-900/50 fixed top-0 right-0 left-0 z-50 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <nav
        ref={navbarRef}
        id="navbar"
        className="flex justify-between px-5 py-3"
      >
        {/* Title and icon */}
        <div className="flex items-center space-x-2">
          <Rocket className="h-[clamp(1.5rem,3.5vw,2.25rem)] w-[clamp(1.5rem,3.5vw,2.25rem)] flex-shrink-0 text-blue-400" />
          <Link
            className="text-4xl text-[clamp(1.5rem,4vw,3rem)] font-bold text-white"
            href="../"
          >
            Galileo lens
          </Link>
        </div>

        <div className="space-4 flex items-center">
          <ul className="flex space-x-6">
            <li className="nav-underline-animate">
              <Link
                className="nav-text-hover inline-block text-base text-[clamp(1rem,1.5vw,1.25rem)] text-slate-300 duration-300 ease-in-out"
                href="../earth"
              >
                Earth
              </Link>
            </li>
            <li className="nav-underline-animate">
              <Link
                className="nav-text-hover inline-block text-base text-[clamp(1rem,1.5vw,1.25rem)] text-slate-300 duration-300 ease-in-out"
                href="../luna"
              >
                Luna
              </Link>
            </li>
            <li className="nav-underline-animate">
              <Link
                className="nav-text-hover inline-block text-base text-[clamp(1rem,1.5vw,1.25rem)] text-slate-300 duration-300 ease-in-out"
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
