'use client';
import Link from 'next/link';
import { useState, useRef, useEffect, JSX } from 'react';
import { usePathname } from 'next/navigation';

export const Navbar = (): JSX.Element => {
    const menuRef = useRef<HTMLDivElement>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const pathname = usePathname();

    useEffect(() => {
        const handleClickOutsideOfMenu = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutsideOfMenu);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideOfMenu);
        };
    }, []);

    const navMenuClasses: string = isMobileMenuOpen
        ? 'w-full'
        : 'hidden w-full';

    type NavLink = {
        name: string;
        href: string;
    };

    const navLinks: NavLink[] = [
        { name: 'Home', href: '/' },
        { name: 'Work History', href: '/work-history' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    // Animate transition of the menu

    return (
        <nav className='sticky top-0 z-10 bg-black shadow-md'>
            <div
                className='flex max-w-screen-xl flex-wrap justify-end px-4 py-4'
                ref={menuRef}
            >
                <button
                    type='button'
                    className='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                    aria-controls='navbar-hamburger'
                    aria-expanded='false'
                    onClick={toggleMobileMenu}
                >
                    <span className='sr-only'>Open main menu</span>
                    <svg
                        className='h-5 w-5'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 17 14'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M1 1h15M1 7h15M1 13h15'
                        />
                    </svg>
                </button>
                <div className={navMenuClasses}>
                    <ul className='mt-4 flex flex-col font-medium'>
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className='flex justify-center lg:justify-end'
                            >
                                <Link
                                    href={link.href}
                                    className={`block py-2 text-white ${
                                        pathname === link.href
                                            ? 'underline'
                                            : ''
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
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
