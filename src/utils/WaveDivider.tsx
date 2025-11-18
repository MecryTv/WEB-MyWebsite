import React from "react";

interface WaveDividerProps {
    topColor: string;
    bottomColor: string;
    flip?: boolean;
}

const WaveDivider: React.FC<WaveDividerProps> = ({ topColor, bottomColor, flip = false }) => {
    return (
        <div
            className="wave-divider"
            style={{
                backgroundColor: bottomColor,
                transform: flip ? 'scaleY(-1)' : 'none'
            }}
        >
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                style={{
                    width: '100%',
                    height: '120px',
                    display: 'block',
                }}
            >
                <path
                    d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,0 L0,0 Z"
                    style={{
                        fill: topColor,
                    }}
                />
            </svg>
        </div>
    );
};

export default WaveDivider;