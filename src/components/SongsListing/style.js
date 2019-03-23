import styled from 'styled-components';
import RoundIcon from '../../assets/icons/round-m.png';
import PlayIcon from '../../assets/icons/play.png';

export const Card = styled.div`
    display: flex;
    padding: 16px;
    margin: 0 0 8px 0;
    width: calc(100% - 32px);
    border-bottom: solid 1px #1e1e1e;
    cursor: pointer;
    @media(max-width: 1000px){
        padding: 0;
        margin: 8px 0 0 8px;
    }
`;

export const CardFooter = styled.div`
    display: flex;
    padding: 0.3em 0;
    font-size: 1.4em;
    color: #8c8c8c;
    @media(max-width: 1000px){
        display: block;
        font-size: 0.9em;
        letter-spacing: 2px;
    }
`;

export const LevelWrapper = styled.div`
    padding: 1em .6em 0 1em;
    font-size: 1.6em;
    @media(max-width: 1000px){
        padding: 1em .2em 0 .4em;
    }
`;
export const Title = styled.div`
    font-size: 1.5em;
    color: #fff;
    font-weight: normal;
    font-style: normal;
    line-height: 32px;
    letter-spacing: 4px;
    @media(max-width: 1000px){
        font-size: 1em;
        letter-spacing: 0;
        word-wrap: break-word;
    }
`;

export const SongBanner = styled.div`
    display: inline-block;
    background-image: url('${(props)=>props.banner}');
    background-size: 70px 70px;
    background-repeat: no-repeat;
    min-width: 120px;
    width: 120px;
    height: 100px;
    background-position: center;
    border-radius: 16px;
    background-color: #41ae00;
    @media(max-width: 1000px){
        margin-top: 18px;
        max-width: 70px;
        min-width: 70px;
        height: 70px;
        background-size: 50px 50px;
    }
`;

export const CardBody = styled.div`
    display: inline-block;
    margin: 0;
    padding: 8px;
`;

export const Submenu = styled.div`
    cursor: pointer;
    margin-left: auto;
    margin-top: 10px;
    right: 10px;
    top: 10px;
    text-align: right;
    background-image: url('${RoundIcon}');
    background-size: 30px 30px;
    background-repeat: no-repeat;
    background-position: center;
    width: 30px;
    height: 30px;
    min-width:30px;
    @media(max-width: 1000px){
        display: block;
    }
`;

export const Artist = styled.div`
    margin-left: 10px;
    @media(max-width: 1000px){
        display: inline-block;
        margin: 0 10px;
    }
`;

export const Play = styled.div`
    background-image: url('${PlayIcon}');
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: left;
    width: 75px;
    text-align: right;
    height: auto;
    margin: 0px 10px;
    @media(max-width: 1000px){
        display: inline-block;
        width: 66px;
        margin: 0;
    }
`;
