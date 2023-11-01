import React from 'react';
import { colorsMap } from '../utils';

// Chip styles
const chipStyle = {
    // width: '4rem',
    padding: '0 20px',
    height: '23px',
    textAlign: 'center',
    marginRight: '5px',
    borderRadius: '17px',
    border: '1px dashed #9D9D9D',
    background: '#F0F0F0',
    color: '#9D9D9D',
    fontFamily: 'Akkurat-Mono',
    fontSize: '10px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
const Chip = ({ color, variant, style }) => {
    const chipColor = colorsMap?.[color] || '#9D9D9D';
    if (variant === 'add') {
        return <div style={{ ...chipStyle, width: 'fit-content', padding: '0 10px' }}> + Add tags</div>;
    }
    return <div style={{ ...chipStyle, color: chipColor, borderColor: chipColor, ...(style || {}) }}>{color}</div>;
};

export default Chip;
