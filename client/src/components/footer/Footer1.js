import React from 'react'
import './footerone.css'
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Link } from 'react-router-dom';

const Footer1 = () => {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
        { name: 'Radio', value: '3' },
    ];

    return (
        <div className='footerone'>
            <div className="style-foot1">
            </div>
            <div className='footerone-content'>
                <h1>
                    Ready to realise your true potential?
                </h1>
                <h2>
                    70% techies find their perfect opportunities within 10 days on CareerLink.
                </h2>
                <ToggleButton
                    className="mb-2 foot1-btn"
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-primary"
                    checked={checked}
                    value="1"
                    onChange={(e) => setChecked(e.currentTarget.checked)}
                >
                    <Link to="/jobs">
                        Get Started
                    </Link>
                </ToggleButton>
            </div>
        </div>
    )
}

export default Footer1
