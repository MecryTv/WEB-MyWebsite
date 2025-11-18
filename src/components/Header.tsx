import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.scss";

const Header: React.FC = () => {
    const activeLinkClassName = "active-nav-link";

    return (
        <header className="main-header">
            <nav className="header-nav">
                <Link
                    to="/"
                    className="logo-link"
                >
                    MecryTv Portfolio
                </Link>

                <div className="nav-links">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? activeLinkClassName : ""}`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? activeLinkClassName : ""}`
                        }
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? activeLinkClassName : ""}`
                        }
                    >
                        Skills
                    </NavLink>
                    <NavLink
                        to="/codezero"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? activeLinkClassName : ""}`
                        }
                    >
                        Code0
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? activeLinkClassName : ""}`
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;