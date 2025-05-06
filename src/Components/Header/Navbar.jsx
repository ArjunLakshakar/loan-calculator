import React, { useEffect, useState } from 'react';
import { NavLinks } from './NavLinks';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <nav className="p-4 shadow-md transition duration-300 fixed top-0 left-0 w-full z-10 
        bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900
        from-[#2d2a5a] via-[#312e81] to-[#3730a3] dark:text-white">

            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Loan Calculator</h1>

                {/* Desktop Nav + Theme Toggle */}
                <div className="hidden md:flex items-center gap-4">
                    <NavLinks />
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-white/10 transition"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? (
                            <SunIcon className="h-6 w-6 text-yellow-400" />
                        ) : (
                            <MoonIcon className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-2">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-white/10 transition"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? (
                            <SunIcon className="h-6 w-6 text-yellow-400" />
                        ) : (
                            <MoonIcon className="h-6 w-6 text-white" />
                        )}
                    </button>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-md hover:bg-white/10 transition"
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? (
                            <XMarkIcon className="h-6 w-6 text-white" />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile NavLinks */}
            {menuOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <NavLinks />
                </div>
            )}
        </nav>
    );
};
