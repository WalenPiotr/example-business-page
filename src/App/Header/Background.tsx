import * as React from "react";
import styled from "styled-components";
const Svg = styled.svg`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Background = () => {
    return (
        <Svg
            viewBox="0 0 160 50"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            transform="scale(-1,1)"
        >
            <defs>
                <linearGradient id="linear1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                        offset="100%"
                        stopColor="rgb(0, 0, 0)"
                        stopOpacity="0.7"
                    />
                    <stop
                        offset="0%"
                        stopColor="rgb(50, 50, 50)"
                        stopOpacity="0.7"
                    />
                </linearGradient>
                <linearGradient id="linear2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop
                        offset="100%"
                        stopColor="rgb(0, 0, 0)"
                        stopOpacity="0.5"
                    />
                    <stop
                        offset="0%"
                        stopColor="rgb(50, 50, 50)"
                        stopOpacity="0.5"
                    />
                </linearGradient>
            </defs>
            <g id="top-background">
                <path
                    stroke="rgba(0, 0, 0, 0.0)"
                    fill="url(#linear1)"
                    d="
                M 0 0 L 0 40, 160 50, 160 0 z
                M 0 40 C 20 50, 140 30, 160 50
            "
                />
                <path
                    stroke="rgba(0, 0, 0, 0.0)"
                    fill="url(#linear2)"
                    d="
                M 0 0 L 0 32, 160 40, 160 0 z
                M 0 32 C 20 20, 140 70, 160 40
            "
                />
                <path
                    stroke="rgba(0, 0, 0, 0.0)"
                    fill="url(#linear2)"
                    d="
                M 0 0 L 0 32, 160 40, 160 0 z
                M 0 32 C 20 20, 140 70, 160 40
            "
                />
            </g>
        </Svg>
    );
};
export default Background;
