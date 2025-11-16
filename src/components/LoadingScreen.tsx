import React from 'react';
import '../styles/LoadingScreen.scss';

const LoadingScreen: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="loading-content">
                <div className="spinner"></div>
                <h1 className="title">Loading...</h1>
                <p className="message">Please wait a moment</p>
            </div>
        </div>
    );
};

export default LoadingScreen;