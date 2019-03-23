import styled from 'styled-components';
import CloseIcon from '../../assets/icons/cross.png';

export const SearchWrapper = styled.div`
    width: 100%;
    position: relative;
    background-color:#000;
    @media(max-width: 1000px){
        width: calc(100% - 10px);
        margin: 4px;
    }
`;

export const SearchBox = styled.input`
    border: 4px solid transparent;
    border-radius: 2px;
    font-size: 1.4rem;
    width: 80%;
    margin: 10px;
    padding: 0.3rem;
    transition: width 0.3s;
    background-color: #2d2d2d;
    color: #878787;
    &:focus {
        width: calc(100% - 4rem);   
        outline: none;
    }
    @media(max-width: 1000px){
        width: calc(100% - 20px);
        margin: 20px 0;
        &:focus {
            width: calc(100% - 20px);
            outline: none;
        }
    }
`;

export const SearchBoxWrapper = styled.span`
    display: flex;
    justify-content: space-between;
`;

export const SearchContentWrapper = styled.div`
    display: inline-block;
    width: 33rem;
    text-align: right;
    margin-left: auto;
    @media(max-width: 1000px){
        width: 100%;
    }
`;

export const CloseBtn = styled.button`
    height: 100%;
    width: 4em;
    position: absolute;
    top: 11px;
    right: 0.5rem;
    display:${(props)=>props.isVisible};
    background-color: transparent;
    border: 0;
    background-repeat: no-repeat;
    background-size: 75%;
    background-image: url('${CloseIcon}');
    &:hover{
        outline: none;
        opacity: 0.8;
        cursor: pointer;
    }
    &:focus {
        outline: none;
        opacity: 0.8;
    }
    @media(max-width: 1000px){
        top: 22px;
    }
`;

export const OptionsWrapper = styled.ul`
    list-style: none;
    width: 30rem;
    -webkit-transition: width 0.3s;
    -webkit-transition: width 0.3s;
    transition: width 0.3s;
    max-height: 200px;
    position: absolute;
    top: 3em;
    right: 9px;
    z-index: 1;
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
        width: calc(100% - 2px);
        right: 0;
    }
`;


export const Options = styled.li`
    display: block;
    background: white;
    border-bottom:solid 1px #ccc;
    padding: 10px;
    font-size: 1.2rem;
    width: 100%;
    border-radius: 2px;
    cursor: pointer;
    background:#333333;
    font-size: 1.5rem;
    color: ${(props)=>props.isActive?'#00f56e':'#ccc'};
    &:hover {
        font-weight: bold;
        color: #00f56e;
        transition: 0.3s all;
    }
`;

export const NoOptions = styled.div`
    color: white;
`;
