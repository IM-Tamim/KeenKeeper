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
          ? "border-2 p-2 bg-[#244D3F] text-white rounded-md"
          : "text-gray-600 hover:text-[#244D3F]"
      }`}
    >
      {children}
    </Link>
  );
};

export default MyLink;