"use client";

import React, { useState } from "react";
import { Flamenco } from "next/font/google";
import Image from "next/image";

const sofia = Flamenco({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="shadow-md flex pb-0 justify-between items-center pt-0 sm:pr-8 p-4 md:pr-32">
        <div className="flex items-center">
          <Image
            width={100}
            height={500}
            className="h-20 sm:h-28"
            src="/navlogo.png"
            alt="NAAYA Logo"
          />
          <h1 className={`text-3xl font-semibold ${sofia.className}`}>NAAYA</h1>
        </div>
        <div>
          <div className="md:hidden relative flex-col justify-end">
            <button
              onClick={toggleMenu}
              className={`text-xl ${isOpen ? "" : ""}`}
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
          <div>
            <div className={`hidden md:flex-row text-xl gap-4 md:flex`}>
              <a href="#home" className={sofia.className}>
                Home
              </a>
              <a href="#projects" className={sofia.className}>
                About us
              </a>
              <a href="#team" className={sofia.className}>
                Team
              </a>
              <a href="#partners" className={sofia.className}>
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={`flex-col abolute text-xl gap-4 text-center mt-2`}>
          <div className={sofia.className}>Home</div>
          <div className={sofia.className}>About us</div>
          <div className={sofia.className}>Team</div>
          <div className={sofia.className}>Contact us</div>
        </div>
      )}
    </>
  );
}
