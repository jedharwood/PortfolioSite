'use client';
import Link from 'next/link';
import { useState, useRef, useEffect, JSX } from 'react';
import { usePathname } from 'next/navigation';
import { SvgButton } from './svg-button';

export const Navbar = (): JSX.Element => {
    const menuRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const pathname = usePathname();

    useEffect(() => {
        const handleClickOutsideOfMenu = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutsideOfMenu);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideOfMenu);
        };
    }, []);

    const navMenuClasses: string = `w-full ${isMenuOpen ? '' : 'hidden'}`;

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
        <nav className='nav-bar sticky top-0 z-10 opacity-100 lg:opacity-90'>
            <div
                className='flex max-w-full flex-wrap justify-end px-4 py-4'
                ref={menuRef}
            >
                <SvgButton
                    onClickFunction={toggleMenu}
                    label='Open main menu'
                    buttonType='burger-menu'
                />
                <div className={navMenuClasses} id='burger-menu'>
                    <ul className='mt-4 flex flex-col font-medium'>
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className='flex justify-center lg:justify-end'
                            >
                                <Link
                                    href={link.href}
                                    className={`block py-2 ${
                                        pathname === link.href
                                            ? 'underline'
                                            : ''
                                    }`}
                                    onClick={() => setIsMenuOpen(false)}
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
