import React, { useState, useEffect } from "react";
import "../styles/Home.scss";

const Home: React.FC = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = [
        "Full-Stack Developer",
        "Startup Programmer",
        "Discord Bot Creator",
        "Minecraft Plugin Developer"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            <div className="bg-circle bg-circle-1" />
            <div className="bg-circle bg-circle-2" />

            <div className="home-content">
                <div className="greeting-text">
                    Welcome to my Portfolio
                </div>

                <h1 className="main-title">
                    I'm MecryTv
                </h1>

                <div className="floating-role-container">
                    {roles.map((role, index) => (
                        <div
                            key={role}
                            className={`floating-role ${currentRole === index ? 'active' : ''}`}
                        >
                            {role}
                        </div>
                    ))}
                </div>

                <p className="description">
                    Crafting innovative digital experiences with modern technologies.
                    <br />
                    Transforming ideas into elegant, functional solutions.
                </p>

                <div className="scroll-indicator">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Home;