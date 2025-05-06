import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const NavLinks = () => {
    const location = useLocation(); // ✅ call the hook here

    const links = [
        { name: 'HOME', path: '/' },
        { name: 'EXCHANGE RATE (LIVE)', path: '/exchange-rate' },
        { name: 'ABOUT', path: '/about' },
        { name: 'ERROR PAGE', path: '/errorpage' },
    ];

    return (
        <div>
            <ul className="flex gap-10">
                {
                    links.map((link, index) => (
                        <li key={index} className="text-white text-sm hover:text-blue-200">
                            <Link
                                to={link.path}
                                className={`${location.pathname === link.path ? ' dark:bg-slate-600 bg-blue-400 px-3 py-1 rounded-lg' : ''}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
