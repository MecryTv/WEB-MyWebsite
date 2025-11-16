import React from "react";
import "../styles/About.scss";

const About: React.FC = () => {
    return (
        <div className="about-section">
            <div className="about-content">
                <h2 className="about-title">Über mich</h2>
                <div className="about-text">
                    <p>
                        Hier kommt dein About-Text. Erzähle von deiner Geschichte, deinen Fähigkeiten
                        und was dich als Entwickler auszeichnet.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;