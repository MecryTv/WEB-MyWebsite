import React from "react";
import "../styles/About.scss";

const About: React.FC = () => {
    return (
        <div className="about-section">
            <div className="about-container">
                <div className="about-left">
                    <div className="profile-card">
                        <div className="profile-image-wrapper">
                            <div className="profile-image">
                                <img
                                    src="/MyLogo.png"
                                    alt="MecryTv Logo"
                                />
                            </div>
                            <div className="profile-glow"></div>
                        </div>

                        <div className="profile-info">
                            <h3 className="profile-name">Joe Jobst</h3>
                            <p className="profile-role">Full Stack Developer</p>
                        </div>

                        <div className="profile-stats">
                            <div className="stat">
                                <span className="stat-value">5+</span>
                                <span className="stat-label">Years</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">20+</span>
                                <span className="stat-label">Skills</span>
                            </div>
                            <div className="stat">
                                <span className="stat-value">100%</span>
                                <span className="stat-label">Passion</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-right">
                    <div className="about-content">

                        <h2 className="about-title">
                            Learn about
                            <span className="gradient-text"> Behind the scenes</span>
                        </h2>

                        <div className="about-description">
                            <p>
                                Hey! I'm Joe, a passionate Full Stack Developer with over 5 years of
                                experience in Programming Discord Bots, FiveM Scripts, Minecraft Plugins and
                                Web Development. I love knowing what lies behind the everyday things.
                            </p>
                            <p>
                                I started programming when I was 15 years old. I started with Java for Minecraft plugins
                                (Eclipse back then, Intellij today) and moved on to Discord bots, websites, and FiveM scripts.
                                I love developing these things with the Jetbrains IDE and I also have a lot of fun doing it.
                            </p>
                            <p>
                                I started programming mainly because I was interested in what lies behind all the everyday things we use.
                                When I'm not programming, I like to play games, take photos, and create 3D models in Blender.
                            </p>
                        </div>

                        <div className="expertise-grid">
                            <div className="expertise-item">
                                <div className="expertise-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="16 18 22 12 16 6"></polyline>
                                        <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                </div>
                                <div className="expertise-content">
                                    <h4>Clean Code</h4>
                                    <p>Writing maintainable, scalable code</p>
                                </div>
                            </div>

                            <div className="expertise-item">
                                <div className="expertise-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                        <line x1="8" y1="21" x2="16" y2="21"></line>
                                        <line x1="12" y1="17" x2="12" y2="21"></line>
                                    </svg>
                                </div>
                                <div className="expertise-content">
                                    <h4>Responsive Design</h4>
                                    <p>Uniqe Designs with Animations</p>
                                </div>
                            </div>

                            <div className="expertise-item">
                                <div className="expertise-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                                        <path d="M2 17l10 5 10-5"></path>
                                        <path d="M2 12l10 5 10-5"></path>
                                    </svg>
                                </div>
                                <div className="expertise-content">
                                    <h4>Modern Stack</h4>
                                    <p>Latest technologies and best practices</p>
                                </div>
                            </div>

                            <div className="expertise-item">
                                <div className="expertise-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <div className="expertise-content">
                                    <h4>Team Player</h4>
                                    <p>Excellent communication and collaboration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;