import styled from 'styled-components';

export const Text = styled.text`
    font-size: 4em;
    font-weight: normal;
    fill: #fff;
    @media(max-width: 1000px){
        fill: #fff;
    }
`;

export const CircleBlack = styled.circle`
    stroke: #000;
    stroke-dasharray: 27,176;
    stroke-dashoffset: 393;
    opacity: 0.9;
    fill:none;
`;

export const CircleGrey = styled.circle`
    stroke: #ddd;
    stroke-dasharray: 181,26;
    stroke-dashoffset: 393;
    opacity: 0.3;
    fill: none;
`;

export const CircleProgress = styled.circle`
    stroke: #13ff00;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
`;

export const SvgWrapper = styled.svg`
    width: 50px;
    height: 50px;
    cursor: pointer;
    @media(max-width: 1000px){
        cursor: pointer;
        width: 35px;
        height: 35px;
    }
`;
