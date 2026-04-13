import React from "react";
import Link from "next/link";
import { FaHeart, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-16">
      <div className="mx-auto px-4 py-10 w-11/12">
        <div className="flex flex-col md:flex-col justify-between items-center gap-6">
          <div>
            <div className=" flex items-center justify-center gap-2mb-2">
              <span className="text-white font-bold text-4xl text-center items-center">
                KeenKeeper
              </span>
            </div>
            <p className="text-sm mt-2">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
          </div>

          <h2>Social Links</h2>

          <div className="flex gap-4 text-lg">
            <a
              href="https://github.com"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="hover:text-emerald-400 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="w-8/12 mx-auto mt-4 pt-6 text-center text-sm flex items-center justify-between gap-4">
          <p className="">2026 KeenKeeper. All rights reserved.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <ul>
              <li>Privacy Policy</li>
            </ul>
            <ul>
              <li>Terms of Service</li>
            </ul>
            <ul>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
