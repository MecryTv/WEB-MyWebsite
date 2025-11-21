import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.scss";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeLinkClassName = "active-nav-link";

    // Funktion zum Umschalten des Menüs
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Menü schließen, wenn ein Link geklickt wird
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header id="main-header" className="main-header">
            <nav className="header-nav">
                <Link to="/" className="logo-link" onClick={closeMenu}>
                    Portfolio
                </Link>

                {/* Hamburger Button (sichtbar auf Mobile) */}
                <div
                    className={`hamburger ${isOpen ? "active" : ""}`}
                    onClick={toggleMenu}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                {/* Navigations Links */}
                <div className={`nav-links ${isOpen ? "active" : ""}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? activeLinkClassName : ""}`
                        }
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? activeLinkClassName : ""}`
                        }
                        onClick={closeMenu}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? activeLinkClassName : ""}`
                        }
                        onClick={closeMenu}
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/codezero"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? activeLinkClassName : ""}`
                        }
                        onClick={closeMenu}
                    >
                        Code0
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? activeLinkClassName : ""}`
                        }
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;