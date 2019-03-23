import styled, { keyframes } from 'styled-components';

const ProgressAnim = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

export const Skeleton = styled.div`
    overflow: hidden;
    margin-top: ${(props) => props.marginTop}px;
    margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : '0' }px;
    margin-left: ${(props) => props.marginLeft ? props.marginLeft :'0' }px;
    margin-right: ${(props) => props.marginRight}px;
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}px;
    background: #ccc;
    border-bottom-left-radius:3px;
    border-top-left-radius:3px;
    border-radius: ${(props)=>props.borderRadius}%;    
    display: block;
    background-image: linear-gradient(270deg,#898989,#2b2b2b);
    background-size: 400% 100%;
    animation: ${ProgressAnim} 3s ease infinite;
`;

export const Wrapper = styled.div`
    position:relative;
    display: flex;
    width: 100%;
    margin: 10px;
`;
export const Content = styled.div`
    width: 100%;
`;
