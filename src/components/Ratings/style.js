import styled from 'styled-components';
import Starfilled from '../../assets/icons/star_white.png';
import Staroutline from '../../assets/icons/star_grey.png';

export const Star = styled.i`
    background-image: url('${(props)=> props.filled ? Starfilled : Staroutline }');
    background-position-x: ${(props)=>props.direction };
    background-size: 20px 20px;
    width: 10px;
    height: 20px;
    display: inline-block;
    overflow: hidden;
`;
