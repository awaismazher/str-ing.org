import React, { useState } from 'react';
import './slider.css';
import Chip from '../Chip';
import NextArrow from '../NextArrow';
import PreviousArrow from '../PreviousArrow';
import { colorsMap } from '../../utils';

const Slider = ({ chips, setChipFilters, chipFilters }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === chips.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? chips.length - 1 : prevIndex - 1));
    };
    const handleChipClick = (color) => {
        setChipFilters((chips) => {
            if (chips?.includes(color)) {
                return chips.filter((c) => c !== color);
            }
            return [...chips, color];
        });
    };
    return (
        <div className='slider'>
            <PreviousArrow />
            <div className='slider-chip'>
                {Object.keys(colorsMap).map((c) => {
                    return (
                        <div key={c} style={{ cursor: 'pointer' }} onClick={() => handleChipClick(c)}>
                            <Chip color={c} style={chipFilters?.includes(c) ? { backgroundColor: 'rgb(220 218 218)' } : {}} />
                        </div>
                    );
                })}
            </div>
            <NextArrow />
        </div>
    );
};

export default Slider;
