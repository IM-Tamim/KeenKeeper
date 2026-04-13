import React from "react";
import { FaHome, FaClock, FaChartPie } from "react-icons/fa";
import Link from "next/link";
import MyLink from "./MyLinks";

const Navbar = () => {
  const navItems = [
    { path: "/", text: "Home", icon: <FaHome /> },
    { path: "/timeline", text: "Timeline", icon: <FaClock /> },
    { path: "/stats", text: "Stats", icon: <FaChartPie /> },
  ];

  return (
    <div className="bg-white sticky top-0 z-50 shadow-sm">
      <nav className="w-11/12 mx-auto">
        <div className="flex justify-between gap-4 items-center py-3 container mx-auto px-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl text-gray-800"><span className="font-bold">Keen</span>Keeper</span>
          </Link>

          <ul className="flex gap-6 items-center">
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
