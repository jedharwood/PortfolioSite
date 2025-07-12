'use client';
import { useState, useRef, useEffect, JSX } from 'react';
import { Link, usePathname } from '../../i18n/routing';
import LanguageSelector from './language-selector';
import SvgButton from './svg-button';

const Navbar = (): JSX.Element => {
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

    const navMenuClasses: string = `w-full overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`;

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

    return (
        <nav className='nav-bar sticky top-0 z-10 opacity-100 lg:opacity-90'>
            <div
                className='flex max-w-full flex-wrap justify-center px-4 py-4 lg:justify-end'
                ref={menuRef}
            >
                <div className='flex space-x-2'>
                    <LanguageSelector />
                    <SvgButton
                        onClickFunction={toggleMenu}
                        label='Open main menu'
                        buttonType='burger-menu'
                    />
                </div>

                <div className={navMenuClasses} id='burger-menu'>
                    <ul className='mt-4 flex flex-col space-y-3 text-lg font-semibold'>
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className='primary-text-hoverable flex justify-center lg:justify-end'
                            >
                                <Link
                                    href={link.href}
                                    className={`block ${
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

export default Navbar;
