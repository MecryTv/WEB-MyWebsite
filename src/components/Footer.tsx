import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss";

const Footer: React.FC = () => {
    return (
        <footer className="app-footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="copyright-area">
                        <p className="copyright-text">
                            © {new Date().getFullYear()} MecryTv. All rights reserved.
                        </p>
                    </div>

                    <div className="footer-links">
                        <Link
                            to="/imprint"
                            className="footer-link"
                        >
                            Imprint
                        </Link>
                        <Link
                            to="/privacy"
                            className="footer-link"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;