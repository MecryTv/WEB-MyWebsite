import React from "react";
import "../styles/Skills.scss";

const Skills: React.FC = () => {
    const skills = [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "SCSS", level: 88 },
        { name: "Python", level: 75 },
        { name: "Git", level: 82 },
    ];

    return (
        <div className="skills-section">
            <div className="skills-content">
                <h2 className="skills-title">Meine Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div key={skill.name} className="skill-item">
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="skill-bar-container">
                                <div
                                    className="skill-bar"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;