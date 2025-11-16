import React from "react";
import "../styles/Home.scss";

const Home: React.FC = () => {
    return (
        <div className="home-page">
            <div className="headline-section">
                <h1 className="main-title">
                    Willkommen auf meiner Portfolio-Seite!
                </h1>
                <p className="subtitle">
                    Entwickler | Designer | Problemlöser
                </p>
            </div>

            <button className="primary-button">
                Projekte ansehen
            </button>

            <div className="info-card">
                <p className="info-text">
                    Hier entsteht meine persönliche Website mit React, TypeScript und Tailwind CSS.
                </p>
            </div>
        </div>
    );
}

export default Home;