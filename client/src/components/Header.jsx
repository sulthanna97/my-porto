import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-2 rounded text-white">
                        SN
                    </span>
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/about" className="hover:text-purple-400">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" className="hover:text-purple-400">
                                Portfolio
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
