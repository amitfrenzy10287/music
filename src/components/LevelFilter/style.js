import styled from 'styled-components';
import crossIcon from '../../assets/icons/cross.png';
import settingIcon from '../../assets/icons/settingsX48.png';

export const LevelWrapper = styled.div`
    display: flex;
    width: 90%;
    padding: 1em;
    @media(max-width: 1000px){
        padding: 0;
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: wrap; /* Safari 6.1+ */
        display: flex;   
        flex-wrap: wrap;
    }
`;

export const LevelIn = styled.div`
    color: #ffffff;
    margin-right: 10px;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    text-align: center;
    cursor: pointer;
    background-color: ${(props)=>props.active==='active' ? '#13ff0054':'#000000' }
    &:focus{
        outline:0;
        border:0;
    }
    @media(max-width: 1000px){
        width: 35px;
        height: 35px;
        border-radius: 50%;
        margin: 0 1em 1em;
    }
`;

export const SongText = styled.div`
    margin: 0.5em 1em;
    text-align: left;
    color: #959595b5;
`;

export const BtnSettings = styled.button`
    padding: 1em 0;
    background-image:url('${settingIcon}');
    background-size: 25px 25px;
    background-position: center;
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    border:0;
    opacity: ${(props)=>props.active ? '.5':'1'};
    background-color: transparent;
    outline: 0;
    cursor: pointer;
`;

export const LevelContainer = styled.span`
    display: ${(props)=>props.show ? 'block': 'none'};
`;

export const CloseBtn = styled.button`
    height: 3.2em;
    width: 4em;
    background-color: transparent;
    border: 0;
    background-position: center;
    margin: 4px;
    background-repeat: no-repeat;
    background-size: 80%;
    background-image: url(${crossIcon});
    @media(max-width: 1000px){
        height: 35px;
        width: 45px;
    }
    &:hover{
        outline: none;
        opacity: 0.8;
        cursor: pointer;
    }
    &:focus {
        outline: none;
        opacity: 0.8;
    }
`;
