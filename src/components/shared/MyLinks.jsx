"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`pb-1 font-semibold flex items-center gap-1.5 transition-colors ${
        pathname === href
          ? "border-2 p-1 bg-emerald-500 text-white rounded-md"
          : "text-gray-600 hover:text-sky-500"
      }`}
    >
      {children}
    </Link>
  );
};

export default MyLink;