import styled from 'styled-components';

export const Card = styled.div`
    display: block;
    padding: 16px;
    margin: 0 0 8px 0;
    width: 100%;
`;

export const HomeContainer = styled.div`
    position:relative;
    width:100%;
    height:580px;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #646464;
        border-radius: 6px;
    }
    &::-webkit-scrollbar
    {
        width: 6px;
        background-color: #494949;
        border-radius: 6px;
    }
    &::-webkit-scrollbar-thumb
    {
        background-color: #ffffff;
        border-radius: 4px;
    }
    @media(max-width: 1000px){
        height: 500px;
    }
`;

