import React from 'react';
import './line.styles.scss';

interface LineProps {
    text?: string;
}

const Line: React.FC<LineProps> = ({ text }) => {
    return (
        <div className="line-with-text">
            <div className="line">
            {text && <span className="text">{text}</span>}
            </div>
        </div>
    )
}

export default Line;