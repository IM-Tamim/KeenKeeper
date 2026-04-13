"use client";

import React, { useState } from "react";
import { FaHome, FaClock, FaBars } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import Link from "next/link";
import MyLink from "./MyLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "/", text: "Home", icon: <FaHome /> },
    { path: "/timeline", text: "Timeline", icon: <FaClock /> },
    { path: "/stats", text: "Stats", icon: <FaArrowTrendUp /> },
  ];

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="w-11/12 mx-auto">
        <div className="flex justify-between items-center py-3 container mx-auto px-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl text-gray-800">
              <span className="font-bold">Keen</span>Keeper
            </span>
          </Link>

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            <FaBars />
          </button>

          {/* Menu */}
          <ul
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row gap-6 items-center py-4 md:py-0 shadow md:shadow-none transition-all duration-300 ${
              open ? "block" : "hidden md:flex"
            }`}
          >
            {navItems.map((item, index) => (
              <MyLink key={index} href={item.path}>
                {item.icon}
                {item.text}
              </MyLink>
            ))}
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;