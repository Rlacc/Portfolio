// src/components/NavBar.jsx
import React from "react";

function NavBar() {
  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-10">
      <nav className="w-fit bg-gray-400/40 shadow rounded-full">
        <ul className="flex justify-between p-2 gap-1">
          <li>
            <a
              href="#about"
              className="px-2 py-1 rounded-full bg-black/35 text-white font-bold hover:shadow transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="px-2 py-1 rounded-full bg-black/35 text-white font-bold hover:shadow transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="px-2 py-1 rounded-full bg-black/35 text-white font-bold hover:shadow transition"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 rounded-full bg-black/35 text-white font-bold hover:shadow transition"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
