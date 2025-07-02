"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
    const menuRef = useRef<HTMLDivElement>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutsideOfMenu = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideOfMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOfMenu);
    };
  }, []);

const navClass: string = isMobileMenuOpen ? 'w-full' : 'hidden w-full';
type NavLink = {
    name: string;
    href: string;
  };

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Work History", href: "/work-history" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  // Animate transition of the menu

  return (
    <nav className="sticky top-0 z-10 shadow-md bg-black">
      <div className="max-w-screen-xl flex flex-wrap justify-end py-4 px-4 lg:px-0" ref={menuRef}>
        <button
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded="false"
            onClick={toggleMobileMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
                />
          </svg>
        </button>
        <div
            className={navClass}
            // id="navbar-hamburger"
            // ref={menuRef}
        >
           <ul className="flex flex-col font-medium mt-4">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="flex justify-center lg:justify-end"
                >
                  <Link href={link.href} className="block py-2">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </nav>
    );
};
