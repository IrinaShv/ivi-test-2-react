import React, { useState } from 'react';
import DiamondButton from "../../components/DiamondButton/DiamondButton";
import './IndexPage.scss';

const IndexPage = () => {
    const [isHighlighted, setIsHighlighted] = useState(false);

    const handleMouseOver = () => {
        setIsHighlighted(true);
    };

    const handleMouseOut = () => {
        setIsHighlighted(false);
    };

    return (
        <div className={`container ${isHighlighted ? 'container_highlight' : ''} container_centered`}>
            <DiamondButton handleMouseOver={handleMouseOver} handleMouseOut={handleMouseOut} />
        </div>
    );
}

export default IndexPage;