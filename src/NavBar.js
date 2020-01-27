import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css, keyframes } from '@emotion/core';
import colors from './colors'

const spin = keyframes`
    to{
        transform: rotate(360deg)
    }
`;

const checkSpeed = (speed) => speed < .3 ? .3 : speed;

const NavBar = () => {
    const [padding] = useState(15);
    const [speed, setSpeed] = useState(1);
    return (
        <header
            css={css`
                background-color: ${colors.secondary};
                padding: ${padding}px;
            `}
        >
            <Link to="/">Adopt Me!</Link>
            <span css={css`
                font-size: 60px;
                display: inline-block;
                animation: ${spin} ${speed}s linear infinite;
                &:hover {
                    text-decoration: underline;
                    animation: ${spin} 1s linear infinite reverse;
                }
            `}
                onClick={() => setSpeed(checkSpeed(speed / 1.5))}
                role="img" aria-label="logo">🐩</span>
        </header>
    )
}

export default NavBar;
