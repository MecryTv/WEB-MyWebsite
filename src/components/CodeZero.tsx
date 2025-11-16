import React from "react";
import "../styles/CodeZero.scss";

const CodeZero: React.FC = () => {
    return (
        <div className="codezero-section">
            <div className="codezero-content">
                <h2 className="codezero-title">Code Zero</h2>
                <div className="codezero-description">
                    <p>
                        Dein spezielles Projekt oder Feature. Beschreibe hier, was Code Zero ist
                        und warum es besonders ist.
                    </p>
                    <p>
                        Ein innovatives Projekt, das zeigt, was mit modernen Web-Technologien
                        möglich ist.
                    </p>
                </div>
                <button className="codezero-button">
                    Mehr erfahren
                </button>
            </div>
        </div>
    );
}

export default CodeZero;