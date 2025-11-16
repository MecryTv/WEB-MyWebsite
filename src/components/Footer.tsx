import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                        <p className="text-sm">
                            © {new Date().getFullYear()} Dein Name. Alle Rechte vorbehalten.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <Link
                            to="/imprint"
                            className="text-sm hover:text-blue-400 transition-colors"
                        >
                            Impressum
                        </Link>
                        <Link
                            to="/privacy"
                            className="text-sm hover:text-blue-400 transition-colors"
                        >
                            Datenschutz
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;