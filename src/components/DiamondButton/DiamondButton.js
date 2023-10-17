import React, { useState, useEffect } from 'react';
import './DiamondButton.scss';

function DiamondButton({ handleMouseOver, handleMouseOut }) {
    const [currentCount, setCurrentCount] = useState(null);
    const [currentInterval, setCurrentInterval] = useState(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleButtonClick = () => {
        if (!isInitialized) {
            setIsInitialized(true);
            setIsDisabled(true);
            setCurrentCount(1);
        }
    };

    useEffect(() => {
        let countdown;
        if (currentCount !== null && currentCount <= 3) {
            countdown = setTimeout(() => {
                setCurrentCount((prevCount) => prevCount + 1);
            }, 1000);
        } else if (currentCount > 3) {
            setCurrentCount(null);
            setCurrentInterval(3);
        }

        return () => clearTimeout(countdown);
    }, [currentCount]);

    useEffect(() => {
        let countdown;
        if (currentInterval !== null && currentInterval > 0) {
            countdown = setTimeout(() => {
                setCurrentInterval((prevCount) => prevCount - 1);
            }, 1000);
        } else if (currentInterval !== null && currentInterval <= 0) {
            setCurrentCount(1);
            setCurrentInterval(null);
        }

        return () => clearTimeout(countdown);
    }, [currentInterval]);

    return (
        <button 
            className="diamond"
            disabled={isDisabled}
            onClick={handleButtonClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <span className="diamond__text">
                {currentCount !== null ? currentCount : 'Go!'}
            </span>
        </button>
    );
}

export default DiamondButton;