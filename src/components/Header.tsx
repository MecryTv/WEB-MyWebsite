import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
                        MeinPortfolio
                    </Link>

                    <div className="flex gap-6">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `font-medium transition-colors ${
                                    isActive
                                        ? 'text-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `font-medium transition-colors ${
                                    isActive
                                        ? 'text-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`
                            }
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/skills"
                            className={({ isActive }) =>
                                `font-medium transition-colors ${
                                    isActive
                                        ? 'text-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`
                            }
                        >
                            Skills
                        </NavLink>
                        <NavLink
                            to="/codezero"
                            className={({ isActive }) =>
                                `font-medium transition-colors ${
                                    isActive
                                        ? 'text-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`
                            }
                        >
                            Code0
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `font-medium transition-colors ${
                                    isActive
                                        ? 'text-blue-600'
                                        : 'text-gray-700 hover:text-blue-600'
                                }`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;